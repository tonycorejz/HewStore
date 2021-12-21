import Head from "next/head";
import Cart from './Cart/Cart';
import { Link, animateScroll as scroll } from "react-scroll";


const MainHeader = ({children, keywords, setCartActive, cartactive, orders, setOrders}) => {
  return(
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta keywords={keywords}></meta>
        <title>HewStore - THE BEST HACKS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
        <link rel="manifest" href="/assets/fav/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/fav/safari-pinned-tab.svg"
          color="#0a122e"
        />
        <link rel="shortcut icon" href="/assets/fav/favicon.ico" />
        <meta name="msapplication-TileColor" content="#0a122e" />
        <meta
          name="msapplication-config"
          content="/assets/fav/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="header_content">
              <div className="header_start">
                <div className="header_logo">
                  <a href="/">
                    <img src="/assets/images/logo.svg" alt="Logo" />
                  </a>
                </div>
                <div className="header_lang">
                  <a href="#" className="_lang active_lang">ENG</a>
                  <a href="#" className="_lang">RU</a>
                </div>
              </div>
              <div className="header_middle">
                <nav className="menu navbar">
                  <ul className="header-list flex-wrap">
                    <Link className="header-item header-item" activeClass="header-item-active" to="main" spy={true} smooth={true} offset={-100} duration={500} attr="main">
                      <h1 className="header-link">HOME</h1>
                    </Link>
                    <Link className="header-item d-flex" activeClass="header-item-active" to="ann" spy={true} smooth={true} offset={-100} duration={500} attr="ann">
                      <h1 className="header-link">ANNOUNCEMENT</h1>
                    </Link>
                    <Link className="header-item d-flex" activeClass="header-item-active" to="products" spy={true} smooth={true} offset={-120} duration={500} attr="products">
                      <h1 className="header-link">
                        PRODUCTS
                      </h1>
                    </Link>
                    <Link className="header-item d-flex" activeClass="header-item-active" to="contacts" spy={true} smooth={true} offset={-100} duration={500} attr="contacts">
                      <h1 className="header-link">CONTACTS</h1>
                    </Link>
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
                      <div className="mobile-menu__container">
                        <div className="container">
                          <div className="row">
                            <ul className="mobile-menu__list">
                              <li className="mobile-menu__item">
                                <a href="#main" className="mobile-menu__link">HOME</a>
                              </li>
                              <li className="mobile-menu__item">
                                <a href="#ann" className="mobile-menu__link"
                                  >ANNOUNCEMENT</a
                                >
                              </li>
                              <li className="mobile-menu__item">
                                <a href="#products" className="mobile-menu__link"
                                  >PRODUCTS</a
                                >
                              </li>
                              <li className="mobile-menu__item">
                                <a href="#contacts" className="mobile-menu__link"
                                  >CONTACTS</a
                                >
                              </li>
                              <li>
                                <div className="header_end">
                                  <div className="cart" onClick={() => setCartActive(true)}>
                                    <button>
                                      <svg className="icon">
                                        <use
                                          xlinkHref="/assets/images/icons.svg#cart"
                                        ></use>
                                      </svg>
                                      CART
                                    </button>
                                  </div>
                                  <div className="purchase" onClick={() => setCartActive(true)}>
                                    <button>PURCHASE CHEAT</button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="header_end">
              <div className="cart" onClick={() => setCartActive(true)}>
                  <button>
                    <svg className="icon">
                      <use xlinkHref="/assets/images/icons.svg#cart"></use>
                    </svg>
                    CART
                  </button>
                </div>
                <div className="purchase" onClick={() => setCartActive(true)}>
                  <button>PURCHASE CHEAT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main_container">
        {children}
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="header_content">
              <div className="header_start">
                <div className="header_logo">
                  <a href="#">
                    <img src="/assets/images/logo.svg" alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="header_middle">
                <nav className="navbar">
                  <ul className="header-list flex-wrap">
                    <li className="header-item">
                      <a href="/" className="header-link">HOME</a>
                    </li>
                    <li className="header-item d-flex">
                      <a href="/#ann" className="header-link">ANNOUNCEMENT</a>
                    </li>
                    <li className="header-item d-flex">
                      <a href="/#products" className="header-link">
                        PRODUCTS
                      </a>
                    </li>
                    <li className="header-item d-flex">
                      <a href="/#contacts" className="header-link">CONTACTS</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header_end">
                <div className="cart" onClick={() => setCartActive(true)}>
                  <button>
                    <svg className="icon">
                      <use xlinkHref="/assets/images/icons.svg#cart"></use>
                    </svg>
                    CART
                  </button>
                </div>
                <div className="purchase" onClick={() => setCartActive(true)}>
                  <button>PURCHASE CHEAT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="bottom_footer_content">
              <a className="terms" href="#">Terms & Conditions</a>
              <div className="header_lang">
                <a href="#" className="_lang active_lang">ENG</a>
                <a href="#" className="_lang">RU</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Cart active={cartactive} setCartActive={setCartActive} orders={orders} setOrders={setOrders}/>
    </>
  );
};

export default MainHeader;