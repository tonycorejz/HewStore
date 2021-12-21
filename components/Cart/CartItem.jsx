import {useState} from 'react';
import CheckInput from '../UI/CheckInput';

const CartItem = ({order, editOrderQnty, removeOrder, itemCheckChanged}) => {

  return (
    <div className="cart-i">
      <img
        className="cart-item__img_bg"
        src={order.img}
        alt="product logo"
      />
      <div className="cart-item">
        <CheckInput isChanged={() => itemCheckChanged(order.id)} checked={order.checked} />
        <div className="cart-item_start">
        
          <img
            className="cart-item__img"
            src={order.img}
            alt="product logo"
          />

          <div className="cart-item-text">
            <h3 className="c-item-text-info">
              {order.name}: {order.period}
            </h3>
            <h4 className="c-item-text-comment">{order.tag} Software</h4>
          </div>
        </div>
        <div className="cart-item-count">
          <button className="cart-count-button" data-direction="minus" onClick={() => order.qnty>1 && editOrderQnty(order.id, order.qnty-1)}>
            -
          </button>
          <input className="ccb-input" type="text" value={order.qnty} readOnly/>
          <button className="cart-count-button" data-direction="plus" onClick={() => editOrderQnty(order.id, order.qnty+1)}>
            +
          </button>
        </div>
        <div className="cart-item-price">
          <span className="cart-price">$ {order.price}</span>
          <button className="cart-price-del" onClick={() => removeOrder(order.id)}>
            <svg className="icon">
              <use
                xlinkHref="/assets/images/icons.svg#basket"
              ></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )

}

export default CartItem;