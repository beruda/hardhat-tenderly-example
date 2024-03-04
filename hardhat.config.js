require("@nomicfoundation/hardhat-toolbox");
const tdly = require("@tenderly/hardhat-tenderly")

tdly.setup({automaticVerifications: true})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    tenderly: {
      url: ""  // your Fork RPC URL
    }
  },
  tenderly: {
    username: "",  // your username or Organization slug
    project: ""  // your project slug
  }
};
