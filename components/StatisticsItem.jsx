const StatisticsItem = (props) => {

  return (
    <tr tabIndex="0">
      <td>{props.statistic.name}</td>
      <td>{props.statistic.purchasesNum}</td>
      <td>{'$ ' + props.statistic.PurchasesAmount}</td>
    </tr>
  )
}

export default StatisticsItem;