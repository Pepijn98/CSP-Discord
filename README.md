# CSP-Discord
Clip Studio Paint Discord Rich Presence

## Prerequisites
- NodeJS >= 18

## Usage
- Clone this repo somewhere
- In the repo folder do either `pnpm install` or `npm install`
- `npm install -g qckwinsvc2` (This allows us to install scripts as a system service)
- `qckwinsvc2 install name="CSPDiscord" description="Clip Studio Paint Discord Presence" path="C:\Path\To\Repo\index.js" now`

**qckwinsvc2 is an updated version of qckwinsvc which stopped working, it does the exact same thing. When you run the command you have to accept 4 popups because it needs permissions to create a system service.**

This will install the script as a windows system service and automatically detect when clip studio paint is opened. Change the script path to where you cloned it before using the command.

## Uninstall system service
All you have to do to uninstall the system service is this
- `qckwinsvc2 uninstall name="CSPDiscord"`

## Preview
<img src="https://kyra.vdbroek.dev/images/63f7e9585c5fb6119c0ad490/NibMc-z-g.png">
