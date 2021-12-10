import MainContainer from "../../components/AdminHeader";
import { useState, useEffect } from 'react';
import AnnouncementPopup from '../../components/AnnouncementPopup';
import AdminAnnouncementsList from '../../components/AdminAnnouncementsList';
import Pagination from '../../components/Pagination';

const AdminAnnounecements = () => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState({id: "", img: "", date: "", header: "", body: ""});
  const [announcements, setAnnouncements] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [announcementsPerPage] = useState(6);
  const [announcementsCurrentPage, setAnnouncementsCurrentPage] = useState(1);

  useEffect(() => {
    const getAnnouncements = async() => {
      setAnnouncementsLoading(true);
      await setTimeout( () =>{ setAnnouncements([
          {id: 1, img: "./assets/images/announce_1.png", date: "24.06.2020", header: "Online Purchase", body: "https://sellix.io/HewStore [PayPal, Credit & Debit Card, BTC, ETH, LTC, XLM, Apple Pay] and another payments method."},
          {id: 2, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 3, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 4, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 5, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 6, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 7, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 8, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 9, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 10, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 11, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
          {id: 12, img: "./assets/images/announce_2.png", date: "22.06.2020", header: "Our Discord", body: "Main: https://discord.gg/4bw8JQD BackUp: https://discord.gg/hgHVZxJ"},
        ]);
        setAnnouncementsLoading(false)
      }, 1000)
    }
    getAnnouncements()
  }, [])

  const lastAnnouncementIndex = announcementsCurrentPage * announcementsPerPage
  const firstAnnouncementIndex = lastAnnouncementIndex - announcementsPerPage
  const currentPageAnnouncements= announcements.slice(firstAnnouncementIndex, lastAnnouncementIndex)

  const paginate = pageNumber => setAnnouncementsCurrentPage(pageNumber);

  const createAnnounecement = (newCoupon) => {
    setAnnouncements([newCoupon, ...announcements])
  }

  const editAnnounecement = (newCoupon) => {
    announcements.forEach((announcement, idx) => {
      if(announcement.id == selectedAnnouncement.id){
        announcements[idx] = {
          ...newCoupon, id: selectedAnnouncement.id
        };
        console.log(announcement);
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
            <div className="setting-coupons-background">
              <div className="setting-coupons">
                  <button onClick={() => {setSelectedAnnouncement({id: "", img: "", date: "", header: "", body: ""});setModalActive("create");}}>СОЗДАТЬ КУПОН</button> 
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