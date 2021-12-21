import Product from './Product';

const ProductsList = ({items, loading, addOrder}) => {

  if(loading) { //Пока сделал так, если надо будет - можно стилей добавить
    return(
      <div className="ann_content">
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
        <div style={{height: 247+"px"}} className="new_announce empty_announce"></div>
      </div>
    )
  }

  return (
    <div className="products_content">
      {
        items.map((item) =>
          <Product product={item} addOrder={addOrder} key={item.id} />
        )
      }
    </div>
  )

}

export default ProductsList;