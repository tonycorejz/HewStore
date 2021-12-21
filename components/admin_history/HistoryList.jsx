import HistoryItem from './HistoryItem';

const HistoryList = ({purchases, loading}) => {

  if(loading) {  //Тут будет лучше вывести через map одинаковые tr или так оставить?
    return(
      <tbody>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
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
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
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
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
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
        purchases.map((purchase) =>
          <HistoryItem purchase={purchase} key={purchase.id}/>
        )
      }
    </tbody> 
  )
}

export default HistoryList;