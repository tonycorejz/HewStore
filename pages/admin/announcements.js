import MainContainer from "../../components/AdminHeader";
import { useState, useEffect } from 'react';
import AnnouncementPopup from '../../components/admin_announcements/AnnouncementPopup';
import AdminAnnouncementsList from '../../components/admin_announcements/AdminAnnouncementsList';
import Pagination from '../../components/Pagination';

const emptyAnnounecement = {id: "", img: "", date: "", header: "", headerRU: "", body: "", bodyRU: ""};

const AdminAnnounecements = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(emptyAnnounecement);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [announcementsPerPage] = useState(6);
  const [announcementsCurrentPage, setAnnouncementsCurrentPage] = useState(1);

  function getData() {
    return [
      {id: 1, img: "/assets/images/announce_1.png", date: "24.06.2020", header: "Online Purchase", headerRU: "Онлайн Покупка", body: "https://sellix.io/HewStore [PayPal, Credit & Debit Card, BTC, ETH, LTC, XLM, Apple Pay] and another payments method.", bodyRU: ""},
      {id: 2, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 3, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 4, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 5, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 6, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 7, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 8, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 9, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 10, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 11, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
      {id: 12, img: "/assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", headerRU: "Наш дискорд", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ", bodyRU: ""},
    ]
  }

  useEffect(() => {
    const getAnnouncements = async() => {
      setAnnouncementsLoading(true);
      await setTimeout( () =>{
        setAnnouncements(getData);
        setAnnouncementsLoading(false)
      }, 1000)
    }
    getAnnouncements()
  }, [])

  const lastAnnouncementIndex = announcementsCurrentPage * announcementsPerPage
  const firstAnnouncementIndex = lastAnnouncementIndex - announcementsPerPage
  const currentPageAnnouncements= announcements.slice(firstAnnouncementIndex, lastAnnouncementIndex) // Выводим элементы только на выбранной странице

  const paginate = pageNumber => setAnnouncementsCurrentPage(pageNumber);

  const createAnnounecement = (newAnnounce) => {
    setAnnouncements([newAnnounce, ...announcements])
  }

  const editAnnounecement = (newAnnounce) => {
    announcements.forEach((announcement, idx) => {
      if(announcement.id == newAnnounce.id){
        announcements[idx] = {...newAnnounce};
      }
    });
    setAnnouncements([...announcements]);
  }

  const removeAnnounecement = () => {
    if(selectedAnnouncement.id != "") {
      announcements.forEach((announcement, idx) => {
        if(announcement.id == selectedAnnouncement.id){
          announcements.splice(idx,1);
        }
      });
      setAnnouncements([...announcements]);
    }
  }

  return(
    <MainContainer keywords={"Управление Объявлениями"}>
      <div className="body-admin body-admin-coupons">
        <AnnouncementPopup active={modalActive} setActive={setModalActive} create={createAnnounecement} edit={editAnnounecement} selectedAnnouncement={selectedAnnouncement} setSelectedAnnouncement={setSelectedAnnouncement}/>
        <section className="section coupons">
          <div className="setting-coupons-background" style={{marginBottom: 20+"px"}}>
            <div className="setting-coupons">
                <button onClick={() => {setSelectedAnnouncement(emptyAnnounecement);setModalActive("create");}}>СОЗДАТЬ КУПОН</button> 
                <h1 onClick={() => selectedAnnouncement.id!=""?setModalActive("edit"):""}>РЕДАКТИРОВАТЬ</h1>
                <h1 onClick={() => removeAnnounecement()}>УДАЛИТЬ</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <AdminAnnouncementsList items={currentPageAnnouncements} loading={announcementsLoading} setSelectedAnnouncement={setSelectedAnnouncement}/>
              <Pagination couponsPerPage={announcementsPerPage} currentPage={announcementsCurrentPage} totalCoupons={announcements.length} paginate={paginate}/>
            </div>
          </div>       
        </section>
      </div>
    </MainContainer>
  );
};

export default AdminAnnounecements;