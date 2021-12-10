import {useState} from 'react';
import CartItem from './CartItem';
const Cart = () => {

  const [cartProducts, setCartProducts] = useState([
    {}
  ]);

  return (
    <div className="cart-bg">
    <main className="cart-main zakaz-form switch-form start-anim">
        <div className="container">
          <div className="row">
            <div className="cart-content">
              <div className="cart-head">
                <h3>CART</h3>
                <h4>999 items</h4>
              </div>
              <div className="cart-content-aside">
                <div className="cart-body">
                  <div className="cart-interactive">
                    <label className="b-contain">
                      <span>Choose all</span>
                      <input type="checkbox" checked />
                      <div className="b-input"></div>
                    </label>
                    <button className="cart-clear">
                      <svg className="icon">
                        <use xlinkHref="./assets/images/icons.svg#basket"></use>
                      </svg>
                      <p>Clear all</p>
                    </button>
                  </div>
                  <CartItem/>
                  
                  <div className="cart-i">
                    <img
                      className="cart-item__img_bg"
                      src="./assets/images/sub_product_1.png"
                      alt="product logo"
                    />
                    <div className="cart-item">
                      <div className="cart-item_start">
                        <img
                          className="cart-item__img"
                          src="./assets/images/sub_product_1.png"
                          alt="product logo"
                        />
                        <div className="cart-item-text">
                          <h3 className="c-item-text-info">
                            BCWare: Week Subscription
                          </h3>
                          <h4 className="c-item-text-comment">Apex Software</h4>
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
                        <span className="cart-price">$ 12.50</span>
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
                </div>
                <div className="cart-aside">
                  <div className="cart-aside-content">
                    <div className="purchase-head">
                      <h2>Purchase</h2>
                    </div>
                    <ul className="purchase-list">
                      <li className="p-list-item">
                        <p className="p-list-item__name">Edenity: Day Subscription</p>
                        <span className="p-list-item__price">$ 9.00</span>
                      </li>
                      <li className="p-list-item">
                        <p className="p-list-item__name">BCWare: Week Subscription</p>
                        <span className="p-list-item__price">$ 12.50</span>
                      </li>
                    </ul>
                    <div className="purchase-list__total">
                      <p className="p-list-total__name">Total</p>
                      <span className="p-list-total__price">$ 21.50</span>
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
                        <button className="p-submit__button">
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
      </div>
  )

}

export default Cart;