import Product from './AdminProduct';

const ProductsList = ({items, loading, setSelectedProduct}) => {

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
          <Product product={item} key={item.id} setSelectedProduct={setSelectedProduct} />
        )
      }
    </div>
  )

}

export default ProductsList;