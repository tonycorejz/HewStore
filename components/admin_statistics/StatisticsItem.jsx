const StatisticsItem = (props) => {

  return (
    <tr tabIndex="0">
      <td>{props.statistic.name}</td>
      <td>{props.statistic.purchasesAmount}</td>
      <td>{'$ ' + props.statistic.sumTotal}</td>
    </tr>
  )
}

export default StatisticsItem;