import PurchaseListItem from '../Cart/PurchaseListItem';

const Payment = ({toPayment, setToPayment, orders, total}) => {

  return (
    <main className={toPayment ? "payment-main cons-form switch-form start-anim" : "payment-main cons-form switch-form"} onClick={e => e.stopPropagation()}>
      <div className="container">
        <div className="row">
          <div className="payment-content">
            <div className="payment-head" onClick={() => setToPayment(false)}>
              <img width="24" src="/assets/images/left-arrow.png" /><h3>Cart</h3>
            </div>
            <div className="payment-content-aside">
              <div className="payment-body">
                <button className="payment-method">
                  <img
                    className="method-image"
                    src="/assets/images/PayPal.svg"
                    alt="PayPal"
                  />
                  <p className="payment-method-name">PayPal</p>
                </button>
                <button className="payment-method">
                  <img
                    className="method-image"
                    src="/assets/images/qiwi.svg"
                    alt="Qiwi"
                  />
                  <p className="payment-method-name">Qiwi</p>
                </button>
                <button className="payment-method">
                  <img
                    className="method-image"
                    src="/assets/images/yoomoney.svg"
                    alt="YooMoney"
                  />
                  <p className="payment-method-name">YooMoney</p>
                </button>
                <button className="payment-method">
                  <img
                    className="method-image"
                    src="/assets/images/BTC.svg"
                    alt="Bitcoin"
                  />
                  <p className="payment-method-name">Bitcoin</p>
                </button>
                <button className="payment-method">
                  <img
                    className="method-image"
                    src="/assets/images/paydash.svg"
                    alt="PayDash"
                  />
                  <p className="payment-method-name">PayDash</p>
                </button>
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
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Payment;