import MainContainer from "../../components/AdminHeader";
import SettingWallet from "../../components/SettingWallet";
import { useState, useEffect  } from 'react';

const AdminWallets = () => {
  const [wallets, setWallets] = useState([
    {name: "PayPal", address: "555585", Enabled: true},
    {name: "Qiwi", address: "555585qiwi", Enabled: true},
    {name: "YooMoney", address: "555585YooMoney", Enabled: true},
    {name: "Bitcoin", address: "555585Bitcoin", Enabled: true},
    {name: "PayDash", address: "555585PayDash", Enabled: true},
  ]);
  const [activeWallet, setActiveWallet] = useState(wallets[0]);

  const editWallets = () => {
    wallets.forEach((wallet, idx) => {
      if(wallet.name == activeWallet.name){
        wallets[idx] = {
          ...activeWallet
        };
      }
    });
    setWallets([...wallets]);
  }

  useEffect(() => {editWallets();},[activeWallet.Enabled]) //Правильно ли я использовал UseEffect для изменения wallets?

  const toggleEnabled = () => {
    if(activeWallet.Enabled) {
      setActiveWallet({...activeWallet, Enabled: false});
    }else {
      setActiveWallet({...activeWallet, Enabled: true});
    }
  }

  return(
    <MainContainer keywords={"Не главная страница"}>
      <div className="body-admin body-admin-coupons">
        <section className="section coupons">
            <div className="setting-coupons-background">
              <SettingWallet wallets={wallets} activeWallet={activeWallet} setActiveWallet={setActiveWallet}/>
            </div>
            <div className="setting-paypal">
                <div>
                  <h1>Настройки {activeWallet.name}</h1>
                  {
                      activeWallet.Enabled ? 
                        <><input placeholder="Адрес кошелька"  onChange={e => setActiveWallet({...activeWallet, address: e.target.value})} value={activeWallet.address} type="text"/> 
                        <button onClick={() => editWallets()}>Сохранить</button></>
                       : ""
    
                  }
                  
                  
                  <h2 onClick={() => toggleEnabled()}>{activeWallet.Enabled ? "Отключить кошелёк" : "Включить кошелёк"}</h2>  
                </div>
            </div>
            
        </section>
      </div>
    </MainContainer>
  )
}

export default AdminWallets;