
import {useState} from 'react';
const PricesInput = ({setSelectedProduct, selectedProduct, pricePeriod, isLast, idx}) => {

  const addPriseField = () => setSelectedProduct({ ...selectedProduct, prices: [...selectedProduct.prices, {period: "", price: "", keys: ""}] });

  const deletePriseField = (idx) => {
    selectedProduct.prices.splice(idx, 1);
    console.log(idx);
    setSelectedProduct({ ...selectedProduct});
  }

  return (
    <>
      <div className="input-and-plus">
        <input value={pricePeriod.period} onChange={e =>{selectedProduct.prices[idx].period = e.target.value; setSelectedProduct({ ...selectedProduct})} } placeholder={"Период лицензии " + (idx+1)} type="text"/>
        { isLast ? <div><div className="img-plus" onClick={addPriseField}><img src="/assets/images/plus.png"/></div></div> : <div><div className="img-plus period-remove" onClick={() => deletePriseField(idx)}><img src="/assets/images/plus.png"/></div></div>}
      </div>
      <input value={pricePeriod.price} onChange={e =>{selectedProduct.prices[idx].price = e.target.value; setSelectedProduct({ ...selectedProduct})} } placeholder={"Цена за период лицензии " + (idx+1)} type="text"/>
      <textarea value={pricePeriod.keys} onChange={e =>{selectedProduct.prices[idx].keys = e.target.value; setSelectedProduct({ ...selectedProduct})} } rows='3' placeholder="Ключи"></textarea>
    </>
  )

}

export default PricesInput;