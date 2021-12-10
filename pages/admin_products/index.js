import MainContainer from "../../components/AdminHeader";
import { useState, useEffect } from 'react';
import ProductPopup from '../../components/ProductPopup';
import AdminProductsList from '../../components/AdminProductsList';

const AdminProducts = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({id: "", name: "", description: "", prices: [{period: "", price: "", keys: ""}], back_img: "", img: "", tag: {name: "", color: ""}});
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async() => {
      setProductsLoading(true);
      await setTimeout( () =>{ setProducts([
        {id: 1, name: "", description: "", prices: [{period: "1 месяц", price: "10", keys: "Y0IEY-0RYQJ-N6MXI"}], back_img: "./assets/images/product_1.png", img: "./assets/images/sub_product_1.png", tag: {name: "APEX", color: "p_red"}},
        {id: 2, name: "", description: "", prices: [], back_img: "./assets/images/product_2.png", img: "./assets/images/sub_product_2.png", tag: {name: "Valorant", color: "p_red"}},
        {id: 3, name: "", description: "", prices: [], back_img: "./assets/images/product_3.png", img: "./assets/images/sub_product_3.png", tag: {name: "Overwatch", color: "p_yellow"}},
        {id: 4, name: "", description: "", prices: [], back_img: "./assets/images/product_4.png", img: "./assets/images/sub_product_4.png", tag: {name: "Overwatch", color: "p_yellow"}},
        {id: 5, name: "", description: "", prices: [], back_img: "./assets/images/product_5.png", img: "./assets/images/sub_product_5.png", tag: {name: "Overwatch", color: "p_yellow"}},
      ]);
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
        products[idx] = {
          ...newProduct, id: newProduct.id
        };
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
            <div className="setting-coupons-background">
              <div className="setting-coupons">
                  <button onClick={() => {setSelectedProduct({id: "", name: "", description: "", prices: [{period: "", price: "", keys: ""}], back_img: "", img: "", tag: {name: "", color: ""}});setModalActive("create");}}>СОЗДАТЬ КУПОН</button> 
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