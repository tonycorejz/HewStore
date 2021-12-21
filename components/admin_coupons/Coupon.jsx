const Coupon = (props) => {

  function renderSwitch(param) {
    switch (param % 10) {
      case 1:
          return(param + " день");
      case 2:
      case 3:
      case 4:
          return param + " дня";
      default:
          return param + " дней";
    }
  }

  return (
    <tr onClick={() => props.setSelectedCoupon({...props.coupon})} tabIndex="0" className="if-select">
      <td>{props.coupon.name}</td>
      <td>{props.coupon.numUses}</td>
      <td>{renderSwitch(props.coupon.validPeriod)}</td>
      <td>{props.coupon.discount + "%"}</td>
    </tr>
  )
}

export default Coupon;