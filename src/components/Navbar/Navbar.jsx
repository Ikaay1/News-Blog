import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import API from "../../api";
import axios from "axios";
import Moment from "react-moment";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [sideSearch, setSideSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date();

  const handleMenu = () => {
    const icon = document.querySelector("#menu-item-610");
    const ul = document.querySelector(".submenu");
    if (active) {
      icon.classList.remove("isactive");
      ul.classList.remove("isopened");
      setActive(false);
    } else {
      icon.classList.add("isactive");
      ul.classList.add("isopened");
      setActive(true);
    }
  };

  const searchOpen = () => {
    const search = document.querySelector(".navbar-search");
    search.classList.add("show-nav-search");
  };
  const sidenavOpen = () => {
    const search = document.querySelector(".side-nav");
    search.classList.add("opened");
  };

  const closeSideNav = () => {
    const search = document.querySelector(".side-nav");
    search.classList.remove("opened");
  };

  const searchClose = () => {
    const search = document.querySelector(".navbar-search");
    search.classList.remove("show-nav-search");
  };

  const searchButton = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?search=${search}`);
    }
  };

  const sideSearchButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(`${API}/api/categories`);
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <div style={{ marginBottom: "12rem" }}>
      <div className="side-nav ">
        <div className="side-nav-inner nicescroll-container">
          <form
            onClick={sideSearchButton}
            id="off-canvas-search"
            className="side-nav-search-form"
          >
            <div className="form-group search-field">
              <input
                type="text"
                placeholder="Search ..."
                value={sideSearch}
                onChange={(e) => setSideSearch(e.target.value)}
              />
              <button type="submit" className="side-nav-search-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <div className="side-nav-content">
            <div className="row">
              <div className="col-lg-6">
                <nav className="menu-off-canvas-container">
                  <ul
                    id="menu-off-canvas"
                    className="main-navigation side-navigation list-inline flex-column nicescroll-container"
                  >
                    <li
                      id="menu-item-987"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-987"
                    >
                      <a href="category/business/index.html">Business</a>
                    </li>
                    <li
                      id="menu-item-989"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-989"
                    >
                      <a href="category/lifestyle/index.html">Lifestyle</a>
                    </li>
                    <li
                      id="menu-item-990"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-990"
                    >
                      <a href="category/technology/index.html">Technology</a>
                    </li>
                    <li
                      id="menu-item-991"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-991"
                    >
                      <a href="category/sports/index.html">Sports</a>
                    </li>
                  </ul>
                </nav>{" "}
              </div>
              <div className="col-lg-6">
                <div className="axil-contact-info-inner">
                  <h5 className="m-b-xs-10"> Contact Information </h5>

                  <div className="axil-contact-info">
                    <address className="address">
                      <p className="m-b-xs-30 mid grey-dark-three">
                        Theodore Lowe, Ap #867-859 <br /> Sit Rd, Azusa New York
                      </p>
                      <div className="h5 m-b-xs-5">
                        {" "}
                        We Are Available 24/ 7. Call Now.{" "}
                      </div>
                      <div>
                        <a className="tel" href="tel:8884562790">
                          <i className="fas fa-phone"></i>(888) 456-2790{" "}
                        </a>
                      </div>
                      <div>
                        <a className="tel" href="tel:12125553333">
                          <i className="fas fa-fax"></i>(121) 255-53333{" "}
                        </a>
                      </div>
                      <div>
                        <a className="tel" href="mailto:example@domain.com">
                          <i className="fas fa-envelope"></i>
                          example@domain.com{" "}
                        </a>
                      </div>
                    </address>
                    <div className="contact-social-share m-t-xs-35">
                      <div className="axil-social-title h5"> Find us here </div>
                      <ul className="social-share social-share__with-bg">
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="close-sidenav-wrap" onClick={closeSideNav}>
          <div className="close-sidenav">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <header className="page-header">
        <div className="header-top bg-grey-dark-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md">
                <div className="d-flex flex-row">
                  <ul className="header-top-nav list-inline justify-content-center justify-content-md-start m-r-xs-20">
                    <li className="current-date">
                      <Moment>{date.getTime()}</Moment>
                    </li>
                  </ul>
                  <ul
                    id="menu-header-to"
                    className="header-top-nav list-inline justify-content-center justify-content-md-start"
                  >
                    <li
                      id="menu-item-427"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"
                    >
                      <Link to="/about">About</Link>
                    </li>
                    <li
                      id="menu-item-426"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-426"
                    >
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>{" "}
                </div>
              </div>
              <div className="col-md-auto">
                <ul className="ml-auto social-share header-top__social-share">
                  <li>
                    <a target="_blank" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar bg-white axil-header axil-header-one">
          <div className="container">
            <div className="navbar-inner">
              <div className="brand-logo-container">
                <Link className="site-logo" to="/">
                  <img
                    className="brand-logo dark-logo"
                    src="/logo-black.svg"
                    alt="Papr"
                  />
                  <img
                    className="brand-logo light-logo"
                    src="/logo-white.svg"
                    alt="Papr"
                  />
                </Link>
              </div>
              <nav className="main-nav-wrapper">
                <ul id="main-menu" className="main-navigation list-inline">
                  <li
                    id="menu-item-399"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-399"
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    id="menu-item-610"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-610 has-dropdown"
                  >
                    <div onClick={handleMenu} style={{ cursor: "pointer" }}>
                      Categories
                    </div>
                    <ul className="submenu">
                      {categories.map((category) => (
                        <li
                          key={category._id}
                          className="menu-item menu-item-type-post_type menu-item-object-post menu-item-1674"
                        >
                          <Link
                            to={`/categories?category=${category.category}`}
                          >
                            {category.category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li
                    id="menu-item-1096"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-1096"
                  >
                    <Link to="/about">About Us</Link>
                  </li>
                  <li
                    id="menu-item-616"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-616"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>{" "}
              <div className="navbar-extra-features ml-auto">
                <form className="navbar-search" onSubmit={searchButton}>
                  <div className="search-field">
                    <input
                      type="text"
                      className="navbar-search-field"
                      placeholder="Search ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="navbar-search-btn" type="submit">
                      <i className="fal fa-search"></i>
                    </button>
                  </div>
                  <a
                    className="navbar-search-close"
                    style={{ cursor: "pointer" }}
                    onClick={searchClose}
                  >
                    <i className="fal fa-times"></i>
                  </a>
                </form>
                <a
                  className="nav-search-field-toggler"
                  data-toggle="nav-search-feild"
                  style={{ cursor: "pointer" }}
                  onClick={searchOpen}
                >
                  <i className="far fa-search"></i>
                </a>
                <a
                  className="side-nav-toggler"
                  id="side-nav-toggler"
                  style={{ cursor: "pointer" }}
                  onClick={sidenavOpen}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div
                className="main-nav-toggler d-block d-lg-none"
                id="main-nav-toggler"
              >
                <div className="toggler-inner">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
