import MainContainer from "../../components/AdminHeader";
import { useState, useEffect } from 'react';
import ProductPopup from '../../components/admin_products/ProductPopup';
import AdminProductsList from '../../components/admin_products/AdminProductsList';

const emptyProduct = {id: "", name: "", description: "", prices: [{period: "", price: "", keys: ""}], back_img: "", img: "", tag: {name: "", color: ""}};

const AdminProducts = () => {

  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  function getData() {
    return [
      {id: 1, name: "", description: "", descriptionRU: "Описание на русском", prices: [{period: "1 месяц", price: "10", keys: "Y0IEY-0RYQJ-N6MXI"}], back_img: "../assets/images/product_1.png", img: "../assets/images/sub_product_1.png", tag: {name: "APEX", color: "p_red"}},
      {id: 2, name: "", description: "", descriptionRU: "", prices: [{period: "", price: "", keys: ""}], back_img: "../assets/images/product_2.png", img: "../assets/images/sub_product_2.png", tag: {name: "Valorant", color: "p_red"}},
      {id: 3, name: "", description: "", descriptionRU: "", prices: [{period: "", price: "", keys: ""}], back_img: "../assets/images/product_3.png", img: "../assets/images/sub_product_3.png", tag: {name: "Overwatch", color: "p_yellow"}},
      {id: 4, name: "", description: "", descriptionRU: "", prices: [{period: "", price: "", keys: ""}], back_img: "../assets/images/product_4.png", img: "../assets/images/sub_product_4.png", tag: {name: "Overwatch", color: "p_yellow"}},
      {id: 5, name: "", description: "", descriptionRU: "", prices: [{period: "", price: "", keys: ""}], back_img: "../assets/images/product_5.png", img: "../assets/images/sub_product_5.png", tag: {name: "Overwatch", color: "p_yellow"}},
    ]
  }

  useEffect(() => {
    const getProducts = async() => {
      setProductsLoading(true);
      await setTimeout( () =>{
        setProducts(getData());
        setProductsLoading(false)
      }, 1000)
    }
    getProducts()
  }, [])

  const createProduct = (newProduct) => {
    setProducts([newProduct, ...products])
  }

  const editProduct = (newProduct) => {
    products.forEach((product, idx) => {
      if(product.id == newProduct.id){
        products[idx] = {...newProduct};
      }
    });
    setProducts([...products]);
  }

  const removeProduct = () => {
    if(selectedProduct.id != "") {
      products.forEach((product, idx) => {
        if(product.id == selectedProduct.id){
          products.splice(idx,1);
        }
      });
      setProducts([...products]);
    }
  }

  return(
    <MainContainer keywords={"Управление Объявлениями"}>
      <div className="body-admin body-admin-coupons">
        <ProductPopup active={modalActive} setActive={setModalActive} create={createProduct} edit={editProduct} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
        <section className="section coupons">
            <div className="setting-coupons-background" style={{marginBottom: 20+"px"}}>
              <div className="setting-coupons">
                  <button onClick={() => {setSelectedProduct(emptyProduct[0]);setModalActive("create");}}>СОЗДАТЬ КУПОН</button> 
                  <h1 onClick={() => selectedProduct.id!=""&&setModalActive("edit")}>РЕДАКТИРОВАТЬ</h1>
                  <h1 onClick={() => removeProduct()}>УДАЛИТЬ</h1>
              </div>
            </div>
            
            <div className="container">
              <div className="row">
                <AdminProductsList items={products} loading={productsLoading} setSelectedProduct={setSelectedProduct} />
              </div>
            </div>
            
        </section>
      </div>
    </MainContainer>
  );
};

export default AdminProducts;