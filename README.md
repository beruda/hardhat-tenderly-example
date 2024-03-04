# Sample Hardhat-Tenderly integration Project

This project demonstrates a basic `hardhat-tenderly` use case.

Usage steps:
```shell
npm i
```
After all dependencies are installed, add your Tenderly credentials to `hardhat.config.js`:
```
url:
username:
project:
```
After that, run:
```shell
npx hardhat run scripts/deploy.js --network tenderly 
```