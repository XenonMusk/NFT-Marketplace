require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
};
