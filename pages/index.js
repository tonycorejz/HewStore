import MainHeader from "../components/MainHeader";
import AnnouncementsList from "../components/AnnouncementsList";
import ProductsList from "../components/ProductsList";
import Pagination from '../components/Pagination';
import Cart from '../components/Cart/Cart';
import {useState, useEffect} from 'react';

const Index = () => {

  const [announcements, setAnnouncements] = useState([]);
  const [announcementsLoading, setAnnouncementsLoading] = useState(false);
  const [announcementsPerPage] = useState(6);
  const [announcementsCurrentPage, setAnnouncementsCurrentPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    const getAnnouncements = async() => {
      setAnnouncementsLoading(true);
      setProductsLoading(true);
      await setTimeout( () =>{ 
        
        setAnnouncements([
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
        setAnnouncementsLoading(false);

        setProducts([
          {id: 1, back_img: "./assets/images/product_1.png", img: "./assets/images/sub_product_1.png", tag: {name: "APEX", color: "p_red"}},
          {id: 2, back_img: "./assets/images/product_2.png", img: "./assets/images/sub_product_2.png", tag: {name: "Valorant", color: "p_red"}},
          {id: 3, back_img: "./assets/images/product_3.png", img: "./assets/images/sub_product_3.png", tag: {name: "Overwatch", color: "p_yellow"}},
          {id: 4, back_img: "./assets/images/product_4.png", img: "./assets/images/sub_product_4.png", tag: {name: "Overwatch", color: "p_yellow"}},
          {id: 5, back_img: "./assets/images/product_5.png", img: "./assets/images/sub_product_5.png", tag: {name: "Overwatch", color: "p_yellow"}},
        ])
        setProductsLoading(false);
      }, 1000)
    }
    getAnnouncements()
  }, [])

  const lastAnnouncementIndex = announcementsCurrentPage * announcementsPerPage
  const firstAnnouncementIndex = lastAnnouncementIndex - announcementsPerPage
  const currentPageAnnouncements = announcements.slice(firstAnnouncementIndex, lastAnnouncementIndex)

  const paginate = pageNumber => setAnnouncementsCurrentPage(pageNumber);

  return(
    <MainHeader keywords={"Main page"}>
      <section className="section main" id="main">
        <div className="container">
          <div className="row">
            <div className="main_content">
              <div className="main_interaction">
                <div className="main_text">
                  <h1>Diverse and rich experience starting daily shaping work</h1>
                  <h4>
                    It should not be forgotten, however, that the constant
                    information and propaganda support of our activities largely
                    determines the creation of positions taken.
                  </h4>
                </div>
                <div className="main_buttons">
                  <a className="purchase" href="./cart.html"
                    ><button>PURCHASE CHEAT</button></a
                  >
                  <a className="more" href="#products">
                    <button>
                      <p>more details</p>
                      <svg className="icon">
                        <use xlinkHref="./assets/images/icons.svg#more"></use>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
              <div className="main_illustration">
                <div className="illustration_bg">
                  <img src="./assets/images/full_logo.png" alt="New Store" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section ann" id="ann">
        <div className="container">
          <div className="row">
            <div className="ann_head"><h3>Announcement</h3></div>
            <AnnouncementsList items={currentPageAnnouncements} loading={announcementsLoading}/>
            <Pagination couponsPerPage={announcementsPerPage} currentPage={announcementsCurrentPage} totalCoupons={announcements.length} paginate={paginate}/>
          </div>
        </div>
      </section>
      <section className="section products" id="products">
        <div className="container">
          <div className="row">
            <div className="products_head">
              <h3>Products</h3>
              <h2>
                Thus, the implementation of the planned targets is an interesting
                experiment in checking the corresponding activation conditions
              </h2>
            </div>
            <ProductsList items={products} loading={productsLoading}/>
          </div>
        </div>
      </section>
      <section className="section contacts" id="contacts">
        <div className="container">
          <div className="row">
            <div className="contacts_head">
              <h3>CONTACTS</h3>
              <h2>
                On the other hand, consultation with a broad asset largely
                determines the creation of forms of development
              </h2>
            </div>
            <div className="contacts_content">
              <a
                href="https://discord.gg/4bw8JQD"
                target="_blank"
                className="new_contact"
              >
                <div className="contact_content">
                  <div className="c_img">
                    <img src="./assets/images/discord.svg" alt="Discord" />
                  </div>
                  <div className="c_text">
                    <h3>Discord Community</h3>
                    <h4>discord.gg/4bw8JQD</h4>
                  </div>
                </div>
              </a>
              <div className="new_contact">
                <div className="contact_content">
                  <div className="c_img">
                    <img src="./assets/images/discord.svg" alt="Discord" />
                  </div>
                  <div className="c_text">
                    <h3>Discord</h3>
                    <h4>HewHewLalalay#5853</h4>
                  </div>
                </div>
              </div>
              <a href="https://t.me/NobodyKnowsMeAgain" className="new_contact">
                <div className="contact_content">
                  <div className="c_img">
                    <img src="./assets/images/telegram.svg" alt="Telegram" />
                  </div>
                  <div className="c_text">
                    <h3>Telegram</h3>
                    <h4>@NobodyKnowsMeAgain</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Cart/>
    </MainHeader>

  );
};

export default Index;