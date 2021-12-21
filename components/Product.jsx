import Link from "next/Link";
import {useState} from 'react';
const Product = (props) => {

  const [pricesActive, setPricesActive] = useState(false);

  const crateOrder = (prices_item) => {
    props.addOrder({id: Date.now(),name: props.product.name, img: props.product.img, period: prices_item.period, price: prices_item.price, tag: props.product.tag.name, qnty: 1, checked: true});
  }

  return (
    <>
    <div className="new_product">
      <a href="#" className="product_image">
        <img
          className="product_bg"
          src={props.product.back_img}
          alt="product_1"
        />
        <img
          className="product_brand"
          src={props.product.img}
          alt="product_1"
        />
        <div className="p_tags">
          <span className={props.product.tag.color}>{props.product.tag.name}</span>
          <span className="p_green">UNDETECTED</span>
          <span className="p_blue">INTEL &amp; AMD</span>
        </div>
      </a>
      <div className="p_menu">
        <div className="p_cart_add" onClick={() => setPricesActive(true)}>
          <button>
            <svg className="icon">
              <use xlinkHref="./assets/images/icons.svg#cart"></use>
            </svg>
            ADD TO CART
          </button>
        </div>
        {/*<!-- MORE INFO 2  -->*/}
        <Link href={`../products/${props.product.id}`}>
          <a className="p_more_info" href="#">
            MORE DETAILS
            <svg className="icon">
              <use xlinkHref="./assets/images/icons.svg#more"></use>
            </svg>
          </a>
        </Link>
      </div>
      <div className={pricesActive ? "period-bg" : "period-bg d-none"} onClick={() => setPricesActive(false)}>
        <div className="period-choise" onClick={e => e.stopPropagation()}>
          <ul className="purchase-list">
            {
              props.product.prices.map((prices_item) => 
                <li className="p-list-item" onClick={() => {crateOrder(prices_item); setPricesActive(false);}} key={props.product.name+prices_item.period}>
                  <p className="p-list-item__name">{prices_item.period} :</p>
                  <span className="p-list-item__price">$ {prices_item.price}</span>
                </li>
              )
            }
          </ul>
          <div className="p-submit">
              <button className="p-submit__button" onClick={() => setPricesActive(false)}>
                <p>Close</p>
              </button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;