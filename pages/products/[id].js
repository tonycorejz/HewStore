import {useRouter} from "next/router";
import SecondaryHeader from "../../components/SecondaryHeader";

export default function Announce({product}) {
  const {query} = useRouter();

  return (
    <SecondaryHeader>
      <section className="section product_page">

        <div className="img-for-product" style={{backgroundImage: `url(${product.back_img})`}}>
            <img src={product.img} className="img-product"/>
        </div>
        <h1><span>{product.name}</span><br/><br/>{product.description}</h1>

      </section>
    </SecondaryHeader>
  )
}

export async function getServerSideProps({params}) {
  const response = {id: params.id,name: "", description: "", prices: [{period: "1 месяц", price: "10", keys: "Y0IEY-0RYQJ-N6MXI"}], back_img: "/assets/images/product_1.png", img: "/assets/images/sub_product_1.png", tag: {name: "APEX", color: "p_red"}};
  const product = response;

  return {
    props: {product}, // will be passed to the page component as props
  }
}