const HistoryItem = (props) => {

  return (
    <tr tabIndex="0">
      <td>{props.purchase.name}</td>
      <td>{props.purchase.purchaseNum}</td>
      <td>{props.purchase.recipient}</td>
      <td>{'$ ' + props.purchase.price}</td>
    </tr>
  )
}

export default HistoryItem;