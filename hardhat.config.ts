import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

const ETH_MAINNET_URL = process.env.ETH_MAINNET_URL;
const ETH_RINKEBY_URL = process.env.ETH_RINKEBY_URL;

const POLYGON_MAINNET_URL = process.env.POLYGON_MAINNET_URL;
const POLYGON_MUMBAI_URL = process.env.POLYGON_MUMBAI_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    mainnet: {
      url: ETH_MAINNET_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    rinkeby: {
      url: ETH_RINKEBY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: POLYGON_MAINNET_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  gasReporter: {
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  typechain: {
    outDir: "src/types",
    target: "ethers-v5",
  },
};

export default config;
