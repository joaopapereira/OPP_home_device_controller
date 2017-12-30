# OPP_gateway
This repository contains the OPP Project code to control the Home Gateway

## Requirements
1. yarn 1.0 +
1. node 7+

## Installation
We are using the workspace experimental feature so the first time you need to execute the command:
```bash
yarn config set workspaces-experimental true
```

To link our local packages so we can develop easier we should link the packages between them.
In order to do that we need to run the command the first time:
```bash
yarn link-packages
```
Everytime we add a new module we need to run this command as well

Run the command to install dependencies
```bash
yarn install
```

## Start application
To run the application run the command
```bash
yarn start
```

## Run the tests
To run the tests
```bash
yarn test
```
