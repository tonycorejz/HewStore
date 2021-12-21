import MainContainer from "../../components/AdminHeader";
import HistoryList from '../../components/admin_history/HistoryList';
import Pagination from '../../components/Pagination';
import FilterByTime from '../../components/FilterByTime';
import { useState, useEffect } from 'react';

const AdminHistory = () => {
  const [loading, setLoading] = useState(false);
  const [purchases, setPurchases] = useState([]); // Все заказы с сервера
  const [timeFilteredPurchases, setTimeFilteredPurchases] = useState([]); // Отфильтрованные заказы по времени
  const [purchasesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  function getData() {
    return [
      {id: 1, name: "Viper | SkyRant", purchaseNum: "1235124123", recipient: "wtane@gmail.com", price: 12, date: 1638316800000},
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
    ]
  }

  useEffect(() => {
    const getPurchases = async() => {
      setLoading(true);
      await setTimeout( () =>{
        setPurchases(getData());
        setTimeFilteredPurchases(getData()); // Приравнивает состояние отфильтрованых заказов всем заказам пока пользователь не решил отфильтровать, показываются все заказы
        setLoading(false)
      }, 1000)
    }
    getPurchases()
  }, [])

  const filterPurchases = filteredPurchasesArray => setTimeFilteredPurchases(filteredPurchasesArray); //Эта функция передаётся в FilterByTime, там в нее посылают отфильтрованный по времени массив заказов

  const lastHistoryIndex = currentPage * purchasesPerPage
  const firstHistoryIndex = lastHistoryIndex - purchasesPerPage
  const currentPagePurchases = timeFilteredPurchases.slice(firstHistoryIndex, lastHistoryIndex) // Выводим элементы только на выбранной странице

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
                        <th>Дата</th>
                    </tr>
                </thead>
                <HistoryList purchases={currentPagePurchases} loading={loading}/>
            </table>
            <Pagination couponsPerPage={purchasesPerPage} currentPage={currentPage} totalCoupons={timeFilteredPurchases.length} paginate={paginate}/>
          </div>
        </section>
      </div>
    </MainContainer>
  )
};

export default AdminHistory;