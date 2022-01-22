const client = require("discord-rich-presence")("934221567242690561");
const exec = require("child_process").exec;

// Check if CSP is already running when starting the script
exec("tasklist", (_err, stdout) => {
    if (stdout.includes("CLIPStudioPaint.exe")) {
        client.updatePresence({
            details: "Clip Studio Paint EX",
            state: "🖊️ Drawing things",
            startTimestamp: Date.now(),
            largeImageKey: "large_logo",
            instance: true
        });
    }
});

(async () => {
    const { subscribe } = await import("wql-process-monitor/promises");

    // Monitor for CSP to launch or exit
    const monitor = await subscribe({
        filter: ["CLIPStudioPaint.exe"],
        whitelist: true
    });

    // Triggers when CSP openes
    monitor.on("creation", async () => {
        client.updatePresence({
            details: "Clip Studio Paint EX",
            state: "🖊️ Drawing things",
            startTimestamp: Date.now(),
            largeImageKey: "large_logo",
            instance: true
        });
    });

    // Triggers when CSP closes
    monitor.on("deletion", () => {
        client.disconnect();
    });
})();
