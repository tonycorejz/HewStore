import {useState} from 'react';
const CartItem = () => {

  return (
    <div className="cart-i">
      <img
        className="cart-item__img_bg"
        src="./assets/images/sub_product_3.png"
        alt="product logo"
      />
      <div className="cart-item">
        <label className="b-contain">
          <input type="checkbox" checked />
          <div className="b-input"></div>
        </label>
        <div className="cart-item_start">
        
          <img
            className="cart-item__img"
            src="./assets/images/sub_product_3.png"
            alt="product logo"
          />

          <div className="cart-item-text">
            <h3 className="c-item-text-info">
              Edenity: Day Subscription
            </h3>
            <h4 className="c-item-text-comment">Overwatch Software</h4>
          </div>
        </div>
        <div className="cart-item-count">
          <button className="cart-count-button" data-direction="minus">
            -
          </button>
          <input className="ccb-input" type="text" value="1" />
          <button className="cart-count-button" data-direction="plus">
            +
          </button>
        </div>
        <div className="cart-item-price">
          <span className="cart-price">$ 9.00</span>
          <button className="cart-price-del">
            <svg className="icon">
              <use
                xlinkHref="./assets/images/icons.svg#basket"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

}

export default CartItem;