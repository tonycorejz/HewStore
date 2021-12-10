import Link from "next/Link";
const Product = (props) => {

  return (
    <div className="new_product">
      <a href="#" className="product_image">
        <img
          className="product_bg"
          src={props.product.back_img}
          alt="product_1"
        />
        <img
          className="product_brand"
          src={props.product.img}
          alt="product_1"
        />
        <div className="p_tags">
          <span className={props.product.tag.color}>{props.product.tag.name}</span>
          <span className="p_green">UNDETECTED</span>
          <span className="p_blue">INTEL &amp; AMD</span>
        </div>
      </a>
      <div className="p_menu">
        <a className="p_cart_add" href="#">
          <button>
            <svg className="icon">
              <use xlinkHref="./assets/images/icons.svg#cart"></use>
            </svg>
            ADD TO CART
          </button>
        </a>
        {/*<!-- MORE INFO 2  -->*/}
        <a className="p_more_info" href="#">
          MORE DETAILS
          <svg className="icon">
            <use xlinkHref="./assets/images/icons.svg#more"></use>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Product;