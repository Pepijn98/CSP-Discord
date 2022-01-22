# CSP-Discord
Clip Studio Paint Discord Rich Presence

## Prerequisites
- NodeJS >= 8

## Usage
- Clone this repo somewhere
- In the repo folder do either `yarn install` or `npm install`
- `npm install -g qckwinsvc` (This allows us to install scripts as a system service)
- `qckwinsvc --name "ClipStudioPaint" --description "Clip Studio Paint Discord Presence" --script "C:\Path\To\Repo\index.js" --startImmediately`

This will install the script as a windows system service and automatically detect when clip studio paint is opened. Change the script path to where you cloned it before using the command.