const FilterByTime = (props) => {

  function isToday(value) {
    let now = new Date();
    let purchaseDate = new Date(value.date);
    return purchaseDate.getDay() == now.getDay() && purchaseDate.getMonth() == now.getMonth() && purchaseDate.getFullYear() == now.getFullYear();
  }

  Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  }

  function isThisWeek(value) {
    let now = new Date();
    let purchaseDate = new Date(value.date);
    
    return now.getFullYear() == purchaseDate.getFullYear() && now.getMonth() == purchaseDate.getMonth() && now.getWeek() == purchaseDate.getWeek();
  }

  function isThisMonth(purchase) {
    let now = new Date();
    let purchaseDate = new Date(purchase.date);

    return now.getFullYear() == purchaseDate.getFullYear() && now.getMonth() == purchaseDate.getMonth();
  }

  const filterPurchases = (time, purchases) => {
    switch (time) {
      case "today":{
        purchases = purchases.filter(isToday);
        console.log(purchases);
        props.filterPurchases(purchases);
        break;
      }
        
      case "week": {
        purchases = purchases.filter(isThisWeek);
        console.log(purchases);
        props.filterPurchases(purchases);
        break;
      }

      case "month": {
        purchases = purchases.filter(isThisMonth);
        console.log(purchases);
        props.filterPurchases(purchases);
        break;
      }
        
      default:
        props.filterPurchases(purchases);
    }
  }

  return (
    <h1 onClick={() => filterPurchases(props.time, props.purchases)}>{props.children}</h1>
  )
}

export default FilterByTime;