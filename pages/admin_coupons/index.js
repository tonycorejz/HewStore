import MainContainer from "../../components/AdminHeader";
import { useState, useEffect } from 'react';
import CouponPopup from '../../components/CouponPopup';
import CouponList from '../../components/CouponList';
import Pagination from '../../components/Pagination';

const AdminCoupons = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState({id: "", name: "", numUses: "", validPeriod: "", discount: ""});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [couponsPerPage] = useState(5);
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const getCoupons = async() => {
      setLoading(true);
      await setTimeout( () =>{ setCoupons([
          {id: 1, name: "1HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 2, name: "2OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 3, name: "3HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 4, name: "4OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 5, name: "5HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 6, name: "6OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 7, name: "7HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 8, name: "8OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 9, name: "9HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 10, name: "10OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 11, name: "11HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 12, name: "12OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 13, name: "13HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 14, name: "14OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 15, name: "15HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 16, name: "16OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 17, name: "17HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 18, name: "18OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 19, name: "19HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 20, name: "20OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 21, name: "21HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
          {id: 22, name: "22OPEN", numUses: "Бесконечно", validPeriod: 24, discount: 25},
          {id: 23, name: "23HEWSTORE", numUses: "100000", validPeriod: 360, discount: 100},
        ])
        setLoading(false)
      }, 1000)
    }

    getCoupons()
  }, [])

  const lastCouponIndex = currentPage * couponsPerPage
  const firstCouponIndex = lastCouponIndex - couponsPerPage
  const currentPageCoupons = coupons.slice(firstCouponIndex, lastCouponIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const createCoupon = (newCoupon) => {
    setCoupons([...coupons, newCoupon])
  }

  const editCoupon = (newCoupon) => {
    coupons.forEach((coupon, idx) => {
      if(coupon.id == selectedCoupon.id){
        coupons[idx] = {
          ...newCoupon, id: selectedCoupon.id
        };
        console.log(coupon);
      }
    });
    setCoupons([...coupons]);
  }

  const removeCoupon = () => {
    if(selectedCoupon.id != "") {
      coupons.forEach((coupon, idx) => {
        if(coupon.id == selectedCoupon.id){
          coupons.splice(idx,1);
        }
      });
      setCoupons([...coupons]);
    }
  }

  return(
    <MainContainer keywords={"Не главная страница"}>
      <div className="body-admin body-admin-coupons">
        <CouponPopup active={modalActive} setActive={setModalActive} create={createCoupon} edit={editCoupon} selectedCoupon={selectedCoupon} setSelectedCoupon={setSelectedCoupon}/>
        <section className="section coupons">
            <div className="setting-coupons-background">
              <div className="setting-coupons">
                  <button onClick={() => {setSelectedCoupon({id: "", name: "", numUses: "", validPeriod: "", discount: ""});setModalActive("create");}}>СОЗДАТЬ КУПОН</button> 
                  <h1 onClick={() => selectedCoupon.id!=""?setModalActive("edit"):""}>РЕДАКТИРОВАТЬ</h1>
                  <h1 onClick={() => removeCoupon()}>УДАЛИТЬ</h1>
              </div>
            </div>
            <div className="win-coupons">
              <table className="table-coupons">
                <thead>
                    <tr>
                        <th>Название купона</th>
                        <th>Количество использований</th>
                        <th>Срок действия</th>
                        <th>Скидка</th>
                    </tr>
                </thead>
                <CouponList coupons={currentPageCoupons} loading={loading} setSelectedCoupon={setSelectedCoupon}/>
              </table>
              <Pagination couponsPerPage={couponsPerPage} currentPage={currentPage} totalCoupons={coupons.length} paginate= {paginate}/>
            </div>
        </section>
      </div>
    </MainContainer>
  );
};

export default AdminCoupons;