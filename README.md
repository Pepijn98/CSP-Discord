# CSP-Discord
Clip Studio Paint Discord Rich Presence

## Prerequisites
- NodeJS

## Usage
You can use any package manager you want `npm`, `pnpm`, `yarn`, for these instructions I'll stick to the default that comes with node itself `npm`.

- Clone this repo anywhere you like
- In the repo folder do `npm install`, this will install all the required dependencies
- Wait for the dependencies to finish installing
- Run `npm run svc-install`, this will install it as a windows service. You might get a popup a couple times since this requires administrator privileges.
- If no errors appeared it should be ready.

## Uninstall system service
Uninstalling is very simple
- Go to the directory where you cloned/installed this project
- Now run `npm run svc-uninstall`
- The service is uninstalled and you're safe to delete this directory

## Preview
<img src="https://kyra.vdbroek.dev/images/63f7e9585c5fb6119c0ad490/NibMc-z-g.png">

### TODO
- system tray (stop/start)
- put details and state presence options in a config file for easy customization
