import { useState } from 'react';

const SettingWallet = ({wallets, activeWallet,setActiveWallet}) => {
  

  return(
    <div className="setting-wallet">
        {
        wallets.map((wallet) =>
          <h1 className={activeWallet.name == wallet.name ? "active" : wallet.Enabled ? null : "wallet-disabled" } onClick={() => setActiveWallet(wallet)} key={wallet.name}>{wallet.name}</h1>
        )
      }
    </div>
  )
}

export default SettingWallet;