import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Svgs from "./Svgs";
import { useDispatch, useSelector } from "react-redux";
import { getPostsBySearch } from "../actions/posts";
import Loader from "./Loader";
import { Typography } from "@material-ui/core";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = ({ light, setLight, theLight }) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const id = query.get("search");
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsBySearch(id.trim()));
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div>
        <Svgs light={light} setLight={setLight} theLight={theLight} />

        {/* Contents */}
        <div className="wrp">
          <main className="main-content ">
            <div id="page" className="papr-main-content">
              <Navbar />

              <div className="papr-container-main">
                <div
                  data-elementor-type="wp-page"
                  data-elementor-id="18"
                  className="elementor elementor-18"
                >
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-3479e63 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="3479e63"
                    data-element_type="section"
                    data-settings='{"background_background":"classNameic","stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-018feb5"
                        data-id="018feb5"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-087910e elementor-widget elementor-widget-axilnews-post-list"
                            data-id="087910e"
                            data-element_type="widget"
                            data-widget_type="axilnews-post-list.default"
                          >
                            <div className="elementor-widget-container">
                              {!posts.length ? (
                                <Typography variant="h5">
                                  No News Post
                                </Typography>
                              ) : (
                                <div className="axil-recent-news">
                                  <div className="section-title d-flex m-b-xs-20">
                                    <a className="btn-link ml-auto">
                                      SEARCH RESULTS
                                    </a>{" "}
                                  </div>

                                  <div className="recent-news-holder">
                                    {/* from here */}
                                    {posts.map((post) => (
                                      <div className="media post-block m-b-xs-30">
                                        <Link
                                          className="align-self-center"
                                          to="/post"
                                        >
                                          <img
                                            className="img-fluid m-r-xs-30"
                                            src={post.image}
                                            alt="girl with a luggage"
                                          />
                                          <div className="grad-overlay"></div>
                                        </Link>

                                        <div className="media-body">
                                          <div className="post-cat-group m-b-xs-10">
                                            <Link
                                              className="post-cat cat-btn"
                                              style={{ background: "#5856d5" }}
                                              to="/categories"
                                            >
                                              {post.category}
                                            </Link>
                                          </div>
                                          <h3 className="axil-post-title hover-line hover-line">
                                            <Link to="/post">{post.title}</Link>
                                          </h3>

                                          <div className="post-metas caption-meta">
                                            <ul className="list-inline">
                                              <li>
                                                <span>By</span>{" "}
                                                <span className="vcard author author_name">
                                                  <span className="fn">
                                                    {post.poster}
                                                  </span>
                                                </span>{" "}
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <Footer />
            </div>
          </main>
        </div>
        <a href="#" className="axil-top-scroll animated bounce faster">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Search;
