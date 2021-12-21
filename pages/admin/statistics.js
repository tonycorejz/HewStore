import MainContainer from "../../components/AdminHeader";
import StatisticList from '../../components/admin_statistics/StatisticList';
import Pagination from '../../components/Pagination';
import FilterByTime from '../../components/FilterByTime';
import { useState, useEffect } from 'react';

const AdminStatistics = () => {
  const [loading, setLoading] = useState(false);
  const [purchases, setPurchases] = useState([]); // Все заказы с сервера
  const [timeFilteredPurchases, setTimeFilteredPurchases] = useState([]); // Отфильтрованные заказы по времени
  const [purchasesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  function getData() {
    return [
      {id: 1, name: "Viper | SkyRant", PurchasePrice: 12, date: 1638316800000},
      {id: 2, name: "OPEN", PurchasePrice: 25, date: 1638378000000},
      {id: 3, name: "HEWSTORE", PurchasePrice: 100, date: 1638378000000},
      {id: 4, name: "OPEN", PurchasePrice: 25, date: 1637341200000},
      {id: 5, name: "HEWSTORE", PurchasePrice: 100, date: 1635786000000},
      {id: 6, name: "OPEN", PurchasePrice: 25, date: 1635786000000},
      {id: 7, name: "HEWSTORE", PurchasePrice: 100, date: 1636477200000},
      {id: 8, name: "OPEN", PurchasePrice: 25, date: 1637514000000},
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

  function PurchacesToProductsStat(inputPurchases) { // Принимает заказы, отдаёт статистику по товарам
    const purchasesSum = {};
    inputPurchases.forEach(v => {
      if (!(purchasesSum[v.name])){
        purchasesSum[v.name] = { name: v.name, purchasesAmount: 0, sumTotal: 0 };
      }
      purchasesSum[v.name].purchasesAmount += 1;
      purchasesSum[v.name].sumTotal += v.PurchasePrice;
    });
      
    let productsStatistic = [];
    Object.keys(purchasesSum).forEach((sumPurchaseKey, idx) => {
      productsStatistic[idx] = purchasesSum[sumPurchaseKey];
    })

    return productsStatistic;
  }

  const filterPurchases = filteredPurchasesArray => setTimeFilteredPurchases(filteredPurchasesArray); //Эта функция передаётся в FilterByTime, там в нее посылают отфильтрованный по времени массив заказов

  const lastStatisticIndex = currentPage * purchasesPerPage
  const firstStatisticIndex = lastStatisticIndex - purchasesPerPage
  const ProductsStat = PurchacesToProductsStat(timeFilteredPurchases);
  const currentPagePurchases = ProductsStat.slice(firstStatisticIndex, lastStatisticIndex) // Выводим элементы только на выбранной странице

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
                        <th>Количество покупок</th> 
                        <th>Сумма покупок</th>
                    </tr>
                </thead>
                <StatisticList statistics={currentPagePurchases} loading={loading}/>
            </table>
            <Pagination couponsPerPage={purchasesPerPage} currentPage={currentPage} totalCoupons={ProductsStat.length} paginate={paginate}/>
          </div>
        </section>
      </div>
    </MainContainer>
  )
};

export default AdminStatistics;