import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api";

const Footer = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(`${API}/api/categories`);
      setCategories(data);
    };

    getCategories();
  }, []);
  return (
    <div>
      <footer className="page-footer bg-grey-dark-key ">
        <div className="container">
          <div className="footer-top">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div className="col-lg-2 col-sm-4">
                <div
                  id="nav_menu-5"
                  className="widget footer-widget widget_nav_menu"
                >
                  <h3 className="footer-widget-title">News</h3>
                  <div className="menu-worldwide-container">
                    <ul id="menu-worldwide" className="menu">
                      {categories.map((category) => (
                        <li
                          key={category._id}
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1651"
                        >
                          <Link
                            to={`/categories?category=${category.category}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div
                  id="nav_menu-6"
                  className="widget footer-widget widget_nav_menu"
                >
                  <h3 className="footer-widget-title">Menu</h3>
                  <div className="menu-international-container">
                    <ul id="menu-international" className="menu">
                      <li
                        id="menu-item-1660"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1660"
                      >
                        <Link to="/">Home</Link>
                      </li>
                      <li
                        id="menu-item-1661"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1661"
                      >
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li
                        id="menu-item-1662"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1662"
                      >
                        <Link to="/about">About</Link>
                      </li>
                      <li
                        id="menu-item-1663"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1663"
                      >
                        <div>Privacy</div>
                      </li>
                      <li
                        id="menu-item-1663"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1663"
                      >
                        <div>Terms and Conditions</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4">
                <div
                  id="nav_menu-7"
                  className="widget footer-widget widget_nav_menu"
                >
                  <h3 className="footer-widget-title">Follow us</h3>
                  <div className="menu-entertainment-container">
                    <ul id="menu-entertainment" className="menu">
                      <li
                        id="menu-item-1616"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1616"
                      >
                        <a href="#">Facebook</a>
                      </li>
                      <li
                        id="menu-item-1617"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1617"
                      >
                        <a href="#">Twitter</a>
                      </li>
                      <li
                        id="menu-item-1618"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1618"
                      >
                        <a href="#">Instagram</a>
                      </li>
                      <li
                        id="menu-item-1618"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1618"
                      >
                        <a href="#">Youtube</a>
                      </li>
                      <li
                        id="menu-item-1619"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1619"
                      >
                        <a href="#">Tiktok</a>
                      </li>
                      <li
                        id="menu-item-1620"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1620"
                      >
                        <a href="#">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="footer-mid">
            <div className="row align-items-center">
              <div className="col-md">
                <div className="footer-logo-container">
                  <a className="footer-logo" href="index.html">
                    <img src="logo-symbol.svg" alt="Papr" />
                  </a>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="footer-social-share-wrapper">
                  <div className="footer-social-share">
                    <div className="axil-social-title">Find us here</div>
                    <ul className="social-share social-share__with-bg">
                      <li>
                        <a target="_blank" href="#" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" rel="noreferrer">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#" rel="noreferrer">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <ul id="menu-footer-bottom-menu" className="footer-bottom-links">
              <li
                id="menu-item-338"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-338"
              >
                <Link to="/contact">Contact Us</Link>
              </li>
              <li
                id="menu-item-1587"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1587"
              >
                <a href="#">Terms of Use</a>
              </li>
              <li
                id="menu-item-1596"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1596"
              >
                <a href="#"></a>
              </li>
            </ul>
            <p className="axil-copyright-txt">
              Copyright &copy; 2022 News and Magazine
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
