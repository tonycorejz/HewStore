const HistoryItem = (props) => {

  function dateToString(purchaseDate) {
    let date = new Date(purchaseDate);
    return date.toLocaleDateString('ru-RU');
  }   

  return (
    <tr tabIndex="0">
      <td>{props.purchase.name}</td>
      <td>{props.purchase.purchaseNum}</td>
      <td>{props.purchase.recipient}</td>
      <td>{'$ ' + props.purchase.price}</td>
      <td>{dateToString(props.purchase.date)}</td>
    </tr>
  )
}

export default HistoryItem;