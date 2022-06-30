export const DEBUG = true;
export const INFURA_ID = "07b7bfdd677d4fcf82e1afeae533e668"

export const MAINNET_RPC_URL = `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`;
export const TESTNET_RPC_URL = `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`;
// export const HARDHAT_URL = "http://localhost:8545";
export const DAPP_READONLY_RPC = !DEBUG ? "https://polygon-rpc.com/" : "https://rpc-mumbai.maticvigil.com/"
export const NETWORK_ID = !DEBUG ? 137 : 80001;
export const RPC_URL = DEBUG ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? 'Mumbai' : 'Mainnet'