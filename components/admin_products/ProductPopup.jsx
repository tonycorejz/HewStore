import FormInput from '../UI/FormInput';
import CreateCouponBtn from '../UI/CreateCouponBtn';
import UploadFile from '../UI/UploadFile';
import PricesInput from '../UI/PricesInput';

const emptyProduct = {id: "", name: "", description: "", prices: [{period: "", price: "", keys: ""}], back_img: "", img: "", tag: {name: "", color: ""}};

const ProductPopup = ({active, setActive, create, edit, selectedProduct, setSelectedProduct}) => {

  const setFile = (elementKey, base64) => {  // Принимает фоновое изображение или лого товара и устанавливает в SelectedProduct
    setSelectedProduct({...selectedProduct, [elementKey] : base64});
  }

  const addNewProduct= (e) => {
    e.preventDefault();
    const newProduct = {
      ...selectedProduct, id: Date.now()
    }
    create(newProduct);
    setSelectedProduct(emptyProduct);
    setActive(false);
  }

  const editProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...selectedProduct
    }
    edit(newProduct);
    setSelectedProduct(emptyProduct);
    setActive(false);
  }

  return (
    <div className={active ? "create-coupon create-product" : "create-coupon d_none"} onClick={() => setActive(false)}>
        <div className="for-create-product" onClick={e => e.stopPropagation()}>
          <div className="create-product-parametrs">
            <h1>{active == "create" ? "Создать" : "Редактировать"} Товар</h1>

            <UploadFile name="back_img" setFile={setFile} >{selectedProduct.back_img == "" ? "Загрузить фоновое изображение" : "Фоновое изображение загружено"}</UploadFile>
            <UploadFile name="img" setFile={setFile} >{selectedProduct.img == "" ? "Загрузить изображение" : "Изображение загружено"}</UploadFile>
            
            <FormInput
            value={selectedProduct.name}
            onChange={e => setSelectedProduct({...selectedProduct, name: e.target.value})}
            type="text" 
            placeholder="Название товара"
            />
            <textarea className="edit-description"
            value={selectedProduct.description}
            onChange={e => setSelectedProduct({...selectedProduct, description: e.target.value})}
            placeholder="Описание"
            />
            <textarea className="edit-description"
            value={selectedProduct.descriptionRU}
            onChange={e => setSelectedProduct({...selectedProduct, descriptionRU: e.target.value})}
            placeholder="Описание Ru"
            />
            <FormInput
            style={{marginBottom: 0}}
            value={selectedProduct.tag.name}
            onChange={e => setSelectedProduct({...selectedProduct, tag: {...selectedProduct.tag, name: e.target.value}})}
            type="text" 
            placeholder="Тэг товара"
            />
            <div className="admin_circles" >
              <div style={{marginRight: 5+"px"}} className={selectedProduct.tag.color == "p_red" ? "circle p_red circle_active" : "circle p_red"} onClick={() => setSelectedProduct({...selectedProduct, tag: {...selectedProduct.tag, color: "p_red"}})} >Красный</div>
              <div className={selectedProduct.tag.color == "p_yellow" ? "circle p_yellow circle_active" : "circle p_yellow"} onClick={() => setSelectedProduct({...selectedProduct, tag: {...selectedProduct.tag, color: "p_yellow"}})} >Оранжевый</div>
            </div>
            {
              selectedProduct.prices.map((pricePeriod, idx) => 
                <PricesInput setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} pricePeriod={pricePeriod} isLast={selectedProduct.prices.length == idx+1} idx={idx} key={idx}/>
              )
            }
            
            <CreateCouponBtn onClick={active == "create" ? addNewProduct : editProduct} >{active == "create" ? "Создать" : "Редактировать"}</CreateCouponBtn>
            <h2 onClick={() => {setSelectedProduct(emptyProduct);setActive(false);}}>Отмена</h2>
          </div>
      </div>
    </div>
  )
}

export default ProductPopup;