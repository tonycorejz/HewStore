import Coupon from './Coupon';

const CouponList = ({coupons, setSelectedCoupon, loading}) => {

  if(loading) {  //Тут будет лучше вывести через map одинаковые tr или так оставить?
    return(
      <tbody>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      {
        coupons.map((coupon) =>
          <Coupon coupon={coupon} setSelectedCoupon={setSelectedCoupon} key={coupon.id}/>
        )
      }
    </tbody> 
  )
}
export default CouponList;