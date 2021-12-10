import Coupon from './Coupon';
import HistoryItem from './HistoryItem';
import StatisticsItem from './StatisticsItem';

const CouponList = ({coupons, purchases, statistics, setSelectedCoupon, loading}) => {

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

  //Правильно ли тут я вообще сделал разделение на купоны/статистику/историю? Или можно было как-то лучше?
  //(до этого в самом "listItem" Я разделял их через if, но потом подумал, что так слишком много условий)
  if(typeof coupons !== 'undefined')
    return (
      <tbody>
        {
          coupons.map((coupon) =>
            <Coupon coupon={coupon} setSelectedCoupon={setSelectedCoupon} key={coupon.id}/>
          )
        }
      </tbody> 
    )

  if(typeof purchases !== 'undefined')
    return (
      <tbody>
        {
          purchases.map((purchase) =>
            <HistoryItem purchase={purchase} key={purchase.id}/>
          )
        }
      </tbody> 
    )

  if(typeof statistics !== 'undefined')
    return (
      <tbody>
        {
          statistics.map((statistic) =>
            <StatisticsItem statistic={statistic} key={statistic.id}/>
          )
        }
      </tbody> 
    )
}

export default CouponList;