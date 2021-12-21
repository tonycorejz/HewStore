const PricesInput = ({setSelectedProduct, selectedProduct, pricePeriod, isLast, idx}) => {

  const addPricesField = () => setSelectedProduct({ ...selectedProduct, prices: [...selectedProduct.prices, {period: "", price: "", keys: ""}] });

  const deletePricesField = (idx) => {
    selectedProduct.prices.splice(idx, 1);
    setSelectedProduct({...selectedProduct});
  }

  const editPricesField = (field, value) => {
    setSelectedProduct({ ...selectedProduct, prices: [...selectedProduct.prices].map((price_item, price_idx) => {
        if(price_idx == idx) return {...price_item, [field]: value};
        return price_item;
      }) 
    })
  }

  return (
    <>
      <div className="input-and-plus">
        <input value={pricePeriod.period} onChange={e => editPricesField("period", e.target.value) } placeholder={"Период лицензии " + (idx+1)} type="text"/>
        { isLast ? 
          <div><div className="img-plus" onClick={addPricesField}><img src="/assets/images/plus.png"/></div></div> : 
          <div><div className="img-plus period-remove" onClick={() => deletePricesField(idx)}><img src="/assets/images/plus.png"/></div></div>
        }
      </div>
      <input value={pricePeriod.price} onChange={e => editPricesField("price", e.target.value) } placeholder={"Цена за период лицензии " + (idx+1)} type="text"/>
      <textarea value={pricePeriod.keys} onChange={e => editPricesField("keys", e.target.value) } rows='3' placeholder="Ключи"></textarea>
    </>
  )
}

export default PricesInput;