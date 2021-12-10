import MainContainer from "../../components/AdminHeader";
import CouponList from '../../components/CouponList';
import Pagination from '../../components/Pagination';
import FilterByTime from '../../components/FilterByTime';
import { useState, useEffect } from 'react';

const AdminHistory = () => {
  const [loading, setLoading] = useState(false);
  const [purchases, setPurchases] = useState([]);
  const [timeFilteredPurchases, setTimeFilteredPurchases] = useState([]);
  const [purchasesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPurchases = async() => {
      setLoading(true);
      await setTimeout( () =>{ setPurchases([
          {id: 1, name: "Viper | SkyRant", purchaseNum: "1235124123", recipient: "wtane@gmail.com", price: "12", date: 1638316800000},
          {id: 2, name: "2OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 3, name: "3HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 4, name: "4OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1637341200000},
          {id: 5, name: "5HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1635786000000},
          {id: 6, name: "6OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1635786000000},
          {id: 7, name: "7HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1636477200000},
          {id: 8, name: "8OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1637514000000},
          {id: 9, name: "9HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1637514000000},
          {id: 10, name: "10OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1640106000000},
          {id: 11, name: "11HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 12, name: "12OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 13, name: "13HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 14, name: "14OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 15, name: "15HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 16, name: "16OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 17, name: "17HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 18, name: "18OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 19, name: "19HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 20, name: "20OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 21, name: "21HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 22, name: "22OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 23, name: "23HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
        ]);
        setTimeFilteredPurchases([
          {id: 1, name: "Viper | SkyRant", purchaseNum: "1235124123", recipient: "wtane@gmail.com", price: "$ 12", date: 1638316800000},
          {id: 2, name: "2OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 3, name: "3HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 4, name: "4OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1637341200000},
          {id: 5, name: "5HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1635786000000},
          {id: 6, name: "6OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1635786000000},
          {id: 7, name: "7HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1636477200000},
          {id: 8, name: "8OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1637514000000},
          {id: 9, name: "9HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1637514000000},
          {id: 10, name: "10OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1640106000000},
          {id: 11, name: "11HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 12, name: "12OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 13, name: "13HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 14, name: "14OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 15, name: "15HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 16, name: "16OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 17, name: "17HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 18, name: "18OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 19, name: "19HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 20, name: "20OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 21, name: "21HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
          {id: 22, name: "22OPEN", purchaseNum: "Бесконечно", recipient: 24, price: 25, date: 1638378000000},
          {id: 23, name: "23HEWSTORE", purchaseNum: "100000", recipient: 360, price: 100, date: 1638378000000},
        ]);
        setLoading(false)
      }, 1000)
    }

    getPurchases()
  }, [])

  const filterPurchases = filteredPurchasesArray => setTimeFilteredPurchases(filteredPurchasesArray);

  const lastCouponIndex = currentPage * purchasesPerPage
  const firstCouponIndex = lastCouponIndex - purchasesPerPage
  const currentPagePurchases = timeFilteredPurchases.slice(firstCouponIndex, lastCouponIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return(
    <MainContainer keywords={"Не главная страница"}>
      <div className="body-admin body-admin-coupons">
        <section className="section coupons">
          <div className="setting-coupons-background">
            <div className="setting-coupons statistics-h1">
                <FilterByTime time="today" purchases={purchases} filterPurchases={filterPurchases}>История за сегодня</FilterByTime>
                <FilterByTime time="week" purchases={purchases} filterPurchases={filterPurchases}>История за неделю</FilterByTime>
                <FilterByTime time="month" purchases={purchases} filterPurchases={filterPurchases}>История за месяц</FilterByTime>
                <FilterByTime time="all" purchases={purchases} filterPurchases={filterPurchases}>История за всё время</FilterByTime>
            </div>
          </div>
          <div className="win-coupons">
              <table className="table-coupons">
                <thead>
                    <tr>
                        <th>Название товара</th>
                        <th>Номер покупки</th>
                        <th>Получатель</th>
                        <th>Стоимость</th>
                    </tr>
                </thead>
                <CouponList purchases={currentPagePurchases} loading={loading}/>
            </table>
            <Pagination couponsPerPage={purchasesPerPage} currentPage={currentPage} totalCoupons={timeFilteredPurchases.length} paginate={paginate}/>
          </div>
        </section>
      </div>
    </MainContainer>
  )
};

export default AdminHistory;