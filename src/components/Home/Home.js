import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Svgs from "../Svgs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import Loader from "../Loader";
import { getPosts } from "../../actions/posts";
import { Typography } from "@material-ui/core";
import Moment from "react-moment";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = ({ light, setLight, theLight }) => {
  const query = useQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = query.get("page") ? query.get("page") : 1;

  const { posts, isLoading } = useSelector((state) => state.posts);
  // const searchQuery = query.get("searchQuery");

  // const dispatch = useDispatch();

  // if (!posts.length && !isLoading)
  //   return (
  //     <Typography variant="h5" gutterBottom>
  //       No News Post
  //     </Typography>
  //   );

  useEffect(() => {
    if (page) {
      dispatch(getPosts(page));
    }
  }, [page]);

  return isLoading ? (
    <Loader />
  ) : (
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
                      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2c14274"
                      data-id="2c14274"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-cf5a5df elementor-widget elementor-widget-axilnews-blog-post"
                          data-id="cf5a5df"
                          data-element_type="widget"
                          data-widget_type="axilnews-blog-post.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="axil-single-lg clearfix">
                              <div className="axil-single-wrp">
                                <div className="axil-latest-post">
                                  <div className="media post-block m-b-xs-30">
                                    <figure className="fig-container">
                                      <Link
                                        className="align-self-center"
                                        to={`/post?post_id=${posts[0]._id}`}
                                      >
                                        <img
                                          className="img-fluid m-r-xs-30"
                                          src={posts[0]?.image}
                                          alt="VR"
                                        />
                                        <div className="grad-overlay"></div>
                                      </Link>
                                      <div className="post-cat-group m-b-xs-10">
                                        <Link
                                          className="post-cat cat-btn"
                                          style={{ background: "#ff4f00" }}
                                          to={`/categories?category=${posts[0]?.category}`}
                                        >
                                          {posts[0]?.category}
                                        </Link>
                                      </div>
                                    </figure>
                                    <div className="media-body">
                                      <h6 className="axil-post-title hover-line hover-line">
                                        <Link
                                          to={`/post?post_id=${posts[0]._id}`}
                                        >
                                          {posts[0]?.title}
                                        </Link>
                                      </h6>
                                      <div className="post-metas caption-meta">
                                        <ul className="list-inline">
                                          <li>
                                            <span>By</span>{" "}
                                            <span className="vcard author author_name">
                                              <span className="fn">
                                                {posts[0]?.poster}
                                              </span>
                                            </span>{" "}
                                          </li>
                                          <li>
                                            <i className="dot">.</i>{" "}
                                            <Moment>
                                              {posts[0]?.createdAt}
                                            </Moment>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                            <div className="axil-recent-news">
                              <div className="section-title d-flex m-b-xs-20">
                                <h2 className="axil-title axil-title__mid">
                                  Recent News
                                </h2>
                                <a className="btn-link ml-auto">
                                  ALL RECENT NEWS
                                </a>{" "}
                              </div>

                              <div className="recent-news-holder">
                                {/* from here */}
                                {posts.map((post) => (
                                  <div className="media post-block m-b-xs-30">
                                    <Link
                                      className="align-self-center"
                                      to={`/post?post_id=${post._id}`}
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
                                          to={`/categories?category=${post.category}`}
                                        >
                                          {post.category}
                                        </Link>
                                      </div>
                                      <h3 className="axil-post-title hover-line hover-line">
                                        <Link to={`/post?post_id=${post._id}`}>
                                          {post.title}
                                        </Link>
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
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div>
                  <Pagination page={page} />
                </div>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-30ebb41 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="30ebb41"
                  data-element_type="section"
                  data-settings='{"background_background":"classNameic"}'
                >
                  <div className="elementor-container elementor-column-gap-extended">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-545af7e"
                      data-id="545af7e"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-5bda352 elementor-widget elementor-widget-axilnews-post-grid"
                          data-id="5bda352"
                          data-element_type="widget"
                          data-widget_type="axilnews-post-grid.default"
                        >
                          <div className="elementor-widget-container">
                            {!posts.length ? (
                              <Typography variant="h5">No News Post</Typography>
                            ) : (
                              <div className="axil-post-grid-2">
                                <div className="section-title d-flex m-b-xs-30">
                                  <h2 className="axil-title">Top Stories</h2>
                                  <a className="btn-link ml-auto">
                                    ALL TOP STORIES
                                  </a>{" "}
                                </div>

                                <div className="axil-post-grid-2-holder row">
                                  <div className="col-lg-8">
                                    <div className="axil-img-container m-b-xs-30">
                                      <Link
                                        className="align-self-center"
                                        to={`/post?post_id=${posts[1]?._id}`}
                                      >
                                        <img
                                          className="w-100"
                                          src={posts[1]?.image}
                                          alt="girl with a luggage"
                                        />
                                        <div className="grad-overlay"></div>
                                      </Link>
                                      <div className="media post-block position-absolute">
                                        <div className="media-body media-body__big">
                                          <div className="post-cat-group m-b-xs-10">
                                            <Link
                                              className="post-cat cat-btn"
                                              style={{
                                                background: "#5856d5",
                                              }}
                                              to={`/categories?category=${posts[1]?.category}`}
                                            >
                                              {posts[1]?.category}
                                            </Link>
                                          </div>
                                          <div className="axil-media-bottom">
                                            <h3 className="axil-post-title hover-line">
                                              <Link
                                                to={`/post?post_id=${posts[1]?._id}`}
                                              >
                                                {posts[1]?.title}
                                              </Link>
                                            </h3>

                                            <div className="post-metas caption-meta">
                                              <ul className="list-inline">
                                                <li>
                                                  <span>By</span>{" "}
                                                  <span className="vcard author author_name">
                                                    <span className="fn">
                                                      {posts[1]?.poster}
                                                    </span>
                                                  </span>{" "}
                                                </li>
                                                <li>
                                                  <i className="dot">.</i>{" "}
                                                  <Moment>
                                                    {posts[1]?.createdAt}
                                                  </Moment>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <div className="axil-content">
                                      {[
                                        ...posts.slice(0, 1),
                                        ...posts.slice(2, 3),
                                      ].map((post) => (
                                        <div className="axil-img-container m-b-xs-30">
                                          <Link
                                            className="align-self-center"
                                            to={`/post?post_id=${post._id}`}
                                          >
                                            <img
                                              className="img-fluid w-100"
                                              src={post.image}
                                              alt="pic"
                                            />
                                            <div className="grad-overlay"></div>
                                          </Link>
                                          <div className="media post-block position-absolute">
                                            <div className="media-body justify-content-end">
                                              <div className="axil-img-cat post-cat-group m-b-xs-10">
                                                <Link
                                                  className="post-cat cat-btn"
                                                  style={{
                                                    background: "#c0cb63",
                                                  }}
                                                  to={`/categories?category=${post.category}`}
                                                >
                                                  {post.category}
                                                </Link>
                                              </div>
                                              <div className="axil-media-bottom">
                                                <h3 className="axil-post-title hover-line hover-line">
                                                  <Link
                                                    to={`/post?post_id=${post._id}`}
                                                  >
                                                    {post.title}
                                                  </Link>
                                                </h3>
                                                <div className="post-metas caption-meta">
                                                  <ul className="list-inline">
                                                    <li>
                                                      <span>By</span>{" "}
                                                      <span className="vcard author">
                                                        <span className="fn">
                                                          {post.poster}
                                                        </span>
                                                      </span>{" "}
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {posts.filter(
                  (post) => post.category.toLowerCase().trim() === "trending"
                ).length ? (
                  <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-68b9724 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                    data-id="68b9724"
                    data-element_type="section"
                    data-settings='{"stretch_section":"section-stretched"}'
                  >
                    <div className="elementor-container elementor-column-gap-extended">
                      <div
                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6cc7c12"
                        data-id="6cc7c12"
                        data-element_type="column"
                      >
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div
                            className="elementor-element elementor-element-9a08bce elementor-widget elementor-widget-axilnews-post-grid"
                            data-id="9a08bce"
                            data-element_type="widget"
                            data-widget_type="axilnews-post-grid.default"
                          >
                            <div className="elementor-widget-container">
                              <div className="axil-trending-news allow-custom-width-height">
                                <div className="section-title m-b-xs-30">
                                  <h2 className="axil-title">
                                    Trending Stories
                                  </h2>
                                  <a className="btn-link ml-auto">
                                    {" "}
                                    ALL TRENDING STORIES
                                  </a>{" "}
                                </div>
                                <div className="recent-news-holder row">
                                  {posts
                                    .filter(
                                      (post) =>
                                        post.category.toLowerCase().trim() ===
                                        "trending"
                                    )
                                    .slice(0, 7)
                                    .map((thepost) => (
                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="media post-block m-b-xs-30">
                                          <Link
                                            className="align-self-center"
                                            to={`/post?post_id=${thepost._id}`}
                                          >
                                            <img
                                              className="img-fluid m-r-xs-30"
                                              src={thepost.image}
                                              alt="ice cream"
                                            />
                                            <div className="grad-overlay"></div>
                                          </Link>
                                          <div className="media-body">
                                            <div className="post-cat-group m-b-xs-10">
                                              <Link
                                                className="post-cat cat-btn"
                                                style={{
                                                  background: "#ff4f00",
                                                }}
                                                to={`/categories?category=${thepost.category}`}
                                              >
                                                {thepost.category}
                                              </Link>
                                            </div>

                                            <h3 className="axil-post-title hover-line hover-line">
                                              <Link
                                                to={`/post?post_id=${thepost._id}`}
                                              >
                                                {thepost.title}
                                              </Link>
                                            </h3>

                                            <div className="post-metas caption-meta">
                                              <ul className="list-inline">
                                                <li>
                                                  <span>By</span>{" "}
                                                  <span className="vcard author author_name">
                                                    <span className="fn">
                                                      {thepost.poster}
                                                    </span>
                                                  </span>{" "}
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
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
  );
};

export default Home;
