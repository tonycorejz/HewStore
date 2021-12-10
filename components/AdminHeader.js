import Head from "next/head";

const AdminHeader = ({children, keywords}) => {
  return( 
      <>
        <Head>
          <meta keywords={"Это слова метатега" + keywords}></meta>
          <title>HewStore - THE BEST HACKS</title>
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/fav/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/fav/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/fav/favicon-16x16.png"
          />
          <link rel="manifest" href="../assets/fav/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/assets/fav/safari-pinned-tab.svg"
            color="#0a122e"
          />
          <link rel="shortcut icon" href="/assets/fav/favicon.ico" />
        </Head>
        <header className="header header-admin">
          <div className="container conteiner-admin">
            <div className="row">
              <div className="header_content">
                <div className="header_start">
                  <div className="header_logo">
                    <a href="/">
                      <img src="/assets/images/logo.svg" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="header_middle">
                  <nav className="menu navbar">
                    <ul className="header-list flex-wrap">
                      <li className="header-item" attr="main">
                        <a href="/admin_coupons" className="header-link">КУПОНЫ</a>
                      </li>
                      <li className="header-item d-flex" attr="ann">
                        <a href="./admin_wallets" className="header-link">КОШЕЛЬКИ</a>
                      </li>
                      <li className="header-item d-flex" attr="products">
                        <a href="./admin_products" className="header-link">ТОВАРЫ</a>
                      </li>
                      <li className="header-item d-flex" attr="contacts">
                        <a href="./admin_announcement" className="header-link">АНОНСЫ</a>
                      </li>
                      <li className="header-item d-flex" attr="statistics">
                          <a href="./admin_statistics" className="header-link">СТАТИСТИКА</a>
                        </li>
                        <li className="header-item d-flex" attr="history">
                          <a href="/admin_history" className="header-link">ИСТОРИЯ</a>
                        </li>
                    </ul>
                  </nav>
                  <nav className="mobile-menu">
                    <div className="container">
                      <div className="row">
                        <input
                          type="checkbox"
                          id="checkbox"
                          className="mobile-menu__checkbox"
                        />
                        <label htmlFor="checkbox" className="mobile-menu__btn"
                          ><div className="mobile-menu__icon"></div>
                        </label>
                        <div className="mobile-menu__container mobile-menu__container-admin">
                          <div className="container">
                            <div className="row">
                              <ul className="mobile-menu__list">
                                <li className="mobile-menu__item">
                                  <a href="#" className="mobile-menu__link">КУПОНЫ</a>
                                </li>
                                <li className="mobile-menu__item">
                                  <a href="./admin_wallets" className="mobile-menu__link">КОШЕЛЬКИ</a>
                                </li>
                                <li className="mobile-menu__item">
                                  <a href="./admin_products" className="mobile-menu__link">ТОВАРЫ</a>
                                </li>
                                <li className="mobile-menu__item">
                                  <a href="./admin_announcement" className="mobile-menu__link">АНОНСЫ</a>
                                </li>
                                <li className="mobile-menu__item">
                                  <a href="./admin_statistics" className="mobile-menu__link">СТАТИСТИКА</a>
                                </li>
                                <li className="mobile-menu__item">
                                  <a href="./admin_history" className="mobile-menu__link">ИСТОРИЯ</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div>
          {children}
        </div>
      </>
  );
};

export default AdminHeader;