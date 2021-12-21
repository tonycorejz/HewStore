import {useState} from 'react';
const PurchaseListItem = ({order}) => {

  return (
    <li className="p-list-item">
      <p className="p-list-item__name">{order.name}: {order.period} </p> {order.qnty > 1 && <p className="p_gold">x{order.qnty}</p>}
      <span className="p-list-item__price">$ {order.price * order.qnty}</span>
    </li>
  )

}

export default PurchaseListItem;