import { exec } from "child_process";
import { subscribe } from "wql-process-monitor";
import { EventLogger } from "node-windows";
import RPC from "discord-rpc";

const client_id = "934221567242690561";

RPC.register(client_id);

const log = new EventLogger("CSPDiscord");

// Monitor for CSP to launch or exit
const monitor = await subscribe({
    creation: true,
    deletion: true,
    bin: {
        filter: ["CLIPStudioPaint.exe"],
        whitelist: true,
    },
});

const client = new RPC.Client({ transport: "ipc" });

/** Set new activity */
async function setActivity() {
    client.setActivity({
        details: "🖊️ Drawing",
        // state: "<Put anything you like here e.g. twitter, pixiv or a description. Make sure to uncomment this line!>",
        startTimestamp: Date.now(),
        largeImageKey: "large_logo",
        instance: true,
    });
}

// Triggers when CSP openes
monitor.on("creation", () => {
    setActivity()
        .then(() => log.info("[creation] - set activity"))
        .catch(log.error);
});

// Triggers when CSP closes
monitor.on("deletion", () => {
    client
        .clearActivity()
        .then(() => log.info("clear activity"))
        .catch(log.error);
});

client.on("ready", () => {
    log.info("ready");

    // Check if CSP is already running when starting the script
    exec("tasklist", (_err, stdout) => {
        if (stdout.includes("CLIPStudioPaint.exe")) {
            setActivity()
                .then(() => log.info("[tasklist] - set activity"))
                .catch(log.error);
        }
    });
});

client
    .login({ clientId: client_id })
    .then(() => log.info("logged in"))
    .catch(log.error);
