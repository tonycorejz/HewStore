import { useState, useEffect } from 'react';
import Payment from '../Payment/Payment';
import CartItem from './CartItem';
import CheckInput from '../UI/CheckInput';
import PurchaseListItem from './PurchaseListItem';

const Cart = ({active, setCartActive, orders, setOrders}) => {

  const [chooseAll, setChooseAll] = useState(true);
  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart")) != null) [...JSON.parse(localStorage.getItem("cart"))].forEach((order) => {
      if(order.checked != true) setChooseAll(false);
    })
  }, [])

  const [toPayment, setToPayment] = useState(false);

  const chooseAllHandle = () => {
    orders.forEach( (order, idx) => {
      orders[idx].checked = true;
    });
    setOrders([...orders]);
    localStorage.setItem("cart", JSON.stringify([...orders]));
    setChooseAll(true);
  }

  const itemCheckChanged = (id) => {
    let isAllChecked = true;
    orders.forEach( (order, idx) => {
      if(order.id == id) {
        orders[idx].checked = !order.checked;
      }
      if(order.checked == false) isAllChecked = false;
    });
    setChooseAll(isAllChecked);
    setOrders([...orders]);
    localStorage.setItem("cart", JSON.stringify([...orders]));
  }

  const editOrderQnty = (editedId, editedqnty) => {
    orders.forEach( (order, idx) => {
      if(order.id == editedId) {
        orders[idx].qnty = editedqnty;
      }
    });
    setOrders([...orders]);
    localStorage.setItem("cart", JSON.stringify([...orders]));
  }

  const removeOrder = removedId => {
    orders.forEach( (order, idx) => {
      if(order.id == removedId) {
        orders.splice(idx,1);
      }
    });
    setOrders([...orders]);
    localStorage.setItem("cart", JSON.stringify([...orders]));
  }

  const total = orders.reduce((prevOrder, currentOrder) => {
    let price = 0;
    if(currentOrder.checked == true) price = parseFloat(currentOrder.price);
    let count = parseFloat(currentOrder.qnty);
    return prevOrder + price * count;
  }, 0);

  return (
    <div className={ active ? "cart-bg" : "d-none cart-bg"} onClick={() => setCartActive(false)} >
      <main className={toPayment ? "cart-main zakaz-form switch-form" : "cart-main zakaz-form switch-form start-anim"} onClick={e => e.stopPropagation()} >
        <div className="container">
          <div className="row">
            <div className="cart-content">
              <div className="cart-head">
                <h3>CART</h3>
                <h4>{orders.length} {orders.length != 1 ? "items" : "item"}</h4>
              </div>
              <div className="cart-content-aside">
                <div className="cart-body">
                  <div className="cart-interactive">
                    <CheckInput isChanged={chooseAllHandle} checked={chooseAll}>Choose all</CheckInput>
                    <button className="cart-clear">
                      <svg className="icon">
                        <use xlinkHref="/assets/images/icons.svg#basket"></use>
                      </svg>
                      <p onClick={() => {setOrders([]); localStorage.setItem("cart", JSON.stringify([]));} }>Clear all</p>
                    </button>
                  </div>
                  {
                    orders.map((order) => 
                      <CartItem order={order} editOrderQnty={editOrderQnty} removeOrder={removeOrder} itemCheckChanged={itemCheckChanged} key={order.id}/>
                    )
                  }
                  
                </div>
                <div className="cart-aside">
                  <div className="cart-aside-content">
                    <div className="purchase-head">
                      <h2>Purchase</h2>
                    </div>
                    <ul className="purchase-list">
                      {
                        orders.map((order) => 
                          order.checked && <PurchaseListItem order={order} key={order.id}/>
                        )
                      }
                    </ul>
                    <div className="purchase-list__total">
                      <p className="p-list-total__name">Total</p>
                      <span className="p-list-total__price">$ {total}</span>
                    </div>
                    <div className="purchase-buttons">
                      <div className="p-coupone">
                        <input
                          type="text"
                          className="p-coupone_input"
                          placeholder="Enter your coupone"
                        />
                        <button className="p-coupone_submit">
                          <span>
                            <svg
                              width="13"
                              height="12"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.633 8.36187C18.1223 8.83916 18.1223 9.61299 17.633 10.0903L9.65864 17.8681C9.1693 18.3454 8.37591 18.3454 7.88657 17.8681C7.39722 17.3908 7.39722 16.617 7.88657 16.1397L13.7218 10.4482L1.25305 10.4482C0.56101 10.4482 0 9.90106 0 9.22607C7.46876e-08 8.55109 0.56101 8.00391 1.25305 8.00391L13.7218 8.00391L7.88657 2.31245C7.39722 1.83516 7.39722 1.06133 7.88657 0.584039C8.37592 0.106753 9.1693 0.106753 9.65865 0.584039L17.633 8.36187Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="p-submit">
                        <button className="p-submit__button" onClick={() => setToPayment(!toPayment)}>
                          <p>PURCHASE</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Payment toPayment={toPayment} setToPayment={setToPayment} orders={orders} total={total} />
    </div>
  )

}

export default Cart;