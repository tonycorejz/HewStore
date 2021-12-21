import FormInput from '../UI/FormInput';
import CreateCouponBtn from '../UI/CreateCouponBtn';

const CouponPopup = ({active, setActive, create, edit, selectedCoupon, setSelectedCoupon}) => {
 

  const addNewCoupon = (e) => {
    e.preventDefault();
    const newCoupon = {
      ...selectedCoupon, id: Date.now()
    }
    create(newCoupon);
    setSelectedCoupon({id: "", name: "", numUses: "", validPeriod: "", discount: ""});
    setActive(false)
  }

  const editCoupon = (e) => {
    e.preventDefault();
    const newCoupon = {
      ...selectedCoupon
    }
    edit(newCoupon);
    setSelectedCoupon({id: "", name: "", numUses: "", validPeriod: "", discount: ""});
    setActive(false)
  }

  return (
    <div className={active ? "create-coupon" : "create-coupon d_none"} onClick={() => setActive(false)}>
        <div className="ellements-create" onClick={e => e.stopPropagation()}>
          <h1>Создание купона</h1>
          <FormInput
          value={selectedCoupon.name}
          onChange={e => setSelectedCoupon({...selectedCoupon, name: e.target.value})}
          type="text" 
          placeholder="Название купона"
          />
          <FormInput
          value={selectedCoupon.numUses}
          onChange={e => setSelectedCoupon({...selectedCoupon, numUses: e.target.value})}
          type="text" 
          placeholder="Количество использований"
          />
          <FormInput
          value={selectedCoupon.validPeriod}
          onChange={e => setSelectedCoupon({...selectedCoupon, validPeriod: e.target.value})}
          type="text" 
          placeholder="Срок действия (в часах)"
          />
          <FormInput
          value={selectedCoupon.discount}
          onChange={e => setSelectedCoupon({...selectedCoupon, discount: e.target.value})}
          type="text" 
          placeholder="Скидка (%)"
          />
          <CreateCouponBtn onClick={active == "create" ? addNewCoupon : editCoupon}>{active == "create" ? "Создать" : "Редактировать"}</CreateCouponBtn>
          <h2 onClick={() => setActive(false)}>Отмена</h2>
        </div>
    </div>
  )
}

export default CouponPopup;