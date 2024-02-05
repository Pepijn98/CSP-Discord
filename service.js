import { Service } from "node-windows";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

function wait(x) {
    return new Promise((res) => setTimeout(res, x));
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svc = new Service({
    name: "CSPDiscord",
    description: "Clip Studio Paint Discord Presence",
    script: join(__dirname, "index.js"),
    nodeOptions: ["--no-deprecation"],
});

svc.on("install", () => {
    console.log("Service installed");
    svc.start();
});

svc.on("alreadyinstalled", () => console.log("Service is already installed"));
svc.on("invalidinstallation", () => console.log("Installation failed"));

svc.on("uninstall", () => console.log("Service uninstalled"));
svc.on("alreadyuninstalled", () => console.log("Service doesn't exist"));

svc.on("start", async () => {
    console.log("Service started");
    await wait(5000);
    process.exit(0);
});
svc.on("stop", () => console.log("Service stopped"));

svc.on("error", (e) => {
    console.error(e);
    process.exit(0);
});

if (process.argv.length === 3) {
    const cmd = process.argv[2].replace("--", "");
    switch (cmd) {
        case "install": {
            svc.install();
            break;
        }
        case "uninstall": {
            svc.uninstall();
            break;
        }
        default: {
            console.error("Invalid option");
            process.exit(0);
        }
    }
} else {
    console.error("Invalid option");
    process.exit(0);
}
