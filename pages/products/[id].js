import {useRouter} from "next/router";
import { useState, useEffect } from 'react';
import MainHeader from "../../components/MainHeader";

export default function Announce({product}) {
  //const {product} = useRouter();
  const [pricesActive, setPricesActive] = useState(false);

  const [cartactive, setCartActive] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart")) != null) setOrders([...JSON.parse(localStorage.getItem("cart"))])
  }, [])

  const addOrder = (newOrder) => {
    let isSet = false;
    orders.forEach((order, idx) => {
      if(order.name == newOrder.name && order.period == newOrder.period){
        orders[idx].qnty += 1;
        orders[idx].checked = true;
        setOrders([...orders]);
        localStorage.setItem("cart", JSON.stringify([...orders]));
        isSet = true;
        return;
      }
    })
    if(!isSet){
      setOrders([...orders, newOrder]);
      localStorage.setItem("cart", JSON.stringify([...orders, newOrder]));
    }
  }

  return (
    <MainHeader keywords={"Product page"} cartactive={cartactive} setCartActive={setCartActive} orders={orders} setOrders={setOrders}>
      <section className="section product_page">
        <div className="product-background-overlay" >
          <div className="img-for-product" style={{backgroundImage: `url(${product.back_img})`}}></div>
          <img src={product.img} className="img-product"/>
        </div>
        <div className="container">
          <h1><span>{product.name}</span><br/><br/></h1>
          <div className="product-content" dangerouslySetInnerHTML={{__html: product.description}}></div>
          <div className="purchase" onClick={() => setPricesActive(true)} ><button>PURCHASE CHEAT</button></div>
        </div>
      </section>

      <div className={pricesActive ? "period-bg" : "period-bg d-none"} onClick={() => setPricesActive(false)}>
        <div className="period-choise" onClick={e => e.stopPropagation()}>
          {
            product.prices.map((prices_item) => 
              <h1 onClick={() => {addOrder({id: Date.now(), name: product.name, img: product.img, period: prices_item.period, price: prices_item.price, tag: product.tag.name, qnty: 1, checked: true}); setPricesActive(false);} } key={prices_item.name+prices_item.period}>{prices_item.name}:{prices_item.period}  ${prices_item.price}</h1>
            )
          }
        </div>
      </div>
    </MainHeader>
  )
}

export async function getServerSideProps({params}) {
  const response = {id: params.id, name: "Имя", description: "<b>Описание<b>", prices: [{period: "1 месяц", price: "10", keys: "Y0IEY-0RYQJ-N6MXI"}], back_img: "/assets/images/product_2.png", img: "/assets/images/sub_product_2.png", tag: {name: "APEX", color: "p_red"}};
  const product = response;

  return {
    props: {product}, // will be passed to the page component as props
  }
}