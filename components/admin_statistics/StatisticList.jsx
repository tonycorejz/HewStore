import StatisticsItem from './StatisticsItem';

const StatisticList = ({statistics, loading}) => {

  if(loading) {  //Тут будет лучше вывести через map одинаковые tr или так оставить?
    return(
      <tbody>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
          <td><div className="emptyCouponVal"></div></td>
        </tr>
        <tr tabIndex="0">
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
        statistics.map((statistic) =>
          <StatisticsItem statistic={statistic} key={statistic.name}/>
        )
      }
    </tbody> 
  )
}

export default StatisticList;