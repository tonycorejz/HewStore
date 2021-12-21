import { useState, useEffect } from 'react';
import MainHeader from "../../components/MainHeader";

export default function Announce({announce}) {
  //const {announce} = useRouter();
  const [cartactive, setCartActive] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart")) != null) setOrders([...JSON.parse(localStorage.getItem("cart"))])
  }, [])

  return (
    <MainHeader keywords={"Announcement page"} cartactive={cartactive} setCartActive={setCartActive} orders={orders} setOrders={setOrders}>
      <section className="section news">
        <div>
            <div className="for-img-news">
                <img src="/assets/images/img-news.png" className="img-news"/>
            </div>
            <div className="for-img-calendary"><img src="/assets/images/calendary.png" className="img-calendary" /><h6>{announce.date}</h6></div>
            <h1><span>{announce.header}</span><br/><br/>{announce.body}</h1>
        </div>
      </section>
    </MainHeader>
  )
}

export async function getServerSideProps({params}) {
  const response = {id: params.id, img: "./assets/images/announce_1.png", date: "24.06.2020", header: "Online Purchase", body: "https://sellix.io/HewStore [PayPal, Credit & Debit Card, BTC, ETH, LTC, XLM, Apple Pay] and another payments method."};
  const announce = response;

  return {
    props: {announce},
  }
}