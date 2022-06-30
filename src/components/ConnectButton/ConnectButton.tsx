import { useEffect, useState } from "react";
import { toHex, truncateAddress } from "../../utils";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./providerOptions";
import { useEtherBalance, useEthers } from '@usedapp/core'

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
});

const ConnectButton = () => {
  const { account, deactivate, activate } = useEthers()
  const etherBalance = useEtherBalance(account);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      await activate(provider);
    } catch (error) {
      console.log('error: ', error)
    }
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    deactivate();
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  return (
    <>
      <div>
        {!account ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <>
            <button onClick={disconnect}>Disconnect</button>
            <span>{`Account: ${truncateAddress(account)}`}</span>
          </>
        )}
      </div>
    </>
  )
}

export default ConnectButton;