import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Loader from "../Loader";
import Navbar from "../Navbar/Navbar";
import Svgs from "../Svgs";
import Moment from "react-moment";
import { useEffect } from "react";
import {
  getPost,
  getall,
  getPostsByCategory,
  getRelated,
} from "../../actions/posts";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Post = ({ light, setLight, theLight }) => {
  const dispatch = useDispatch();
  const query = useQuery();
  const id = query.get("post_id");
  const { post, posts, relatedPosts, isLoading } = useSelector(
    (state) => state.posts
  );

  const prevPostIndex = posts.findIndex((eachpost) => eachpost._id == id) - 1;
  const nextPostIndex = posts.findIndex((eachpost) => eachpost._id == id) + 1;

  // const prevImg = `url(${posts[prevPostIndex]?.image})`;
  // const nextImg = `url(${posts[nextPostIndex]?.image})`;

  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getall());
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getRelated(post.category));
    }
  }, [post]);

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
            <div class="papr-container-main">
              <div class="papr-container">
                <section
                  style={{ marginTop: "17.5rem" }}
                  class="banner__single-post bg-grey-light-three banner-single-2 banner__standard"
                >
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-lg-6">
                        <div class="post-title-wrapper">
                          <div class="btn-group">
                            <Link
                              class="post-cat cat-btn"
                              style={{ background: "#5ac8fa" }}
                              to={`/categories?category=${post?.category}`}
                            >
                              {post?.category}
                            </Link>
                          </div>
                          <h1 class="m-t-xs-20 m-b-xs-0 axil-post-title hover-line">
                            {post?.title}
                          </h1>
                          <div class="post-metas banner-post-metas m-t-xs-20">
                            <ul class="axil-post-meta list-inline">
                              <li>
                                <i class="dot">.</i>{" "}
                                <span class="published updated">
                                  <Moment>{post?.createdAt}</Moment>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <img class="img-fluid" src={post?.image} alt="breads" />
                      </div>
                    </div>
                  </div>
                </section>

                <div class="post-single-wrapper p-t-xs-60">
                  <div class="container">
                    <div class="social-share-sticky">
                      <div class="shared-counts-wrap sidebar-top style-icon">
                        <a
                          href="https://www.facebook.com"
                          title="Share on Facebook"
                          target="_blank"
                          rel="noreferrer"
                          class="shared-counts-button facebook shared-counts-no-count"
                          data-postid="562"
                          data-social-network="Facebook"
                          data-social-action="Share"
                          data-social-target="index.html"
                        >
                          <span class="shared-counts-icon-label">
                            <span class="shared-counts-icon">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18.8125"
                                height="32"
                                viewBox="0 0 602 1024"
                              >
                                <path d="M548 6.857v150.857h-89.714q-49.143 0-66.286 20.571t-17.143 61.714v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571q0-106.286 59.429-164.857t158.286-58.571q84 0 130.286 6.857z"></path>
                              </svg>
                            </span>
                            <span class="shared-counts-label">Facebook</span>
                          </span>
                        </a>
                        <a
                          href="https://twitter.com"
                          title="Share on Twitter"
                          target="_blank"
                          rel="noreferrer"
                          class="shared-counts-button twitter shared-counts-no-count"
                          data-postid="562"
                          data-social-network="Twitter"
                          data-social-action="Tweet"
                          data-social-target="index.html"
                        >
                          <span class="shared-counts-icon-label">
                            <span class="shared-counts-icon">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="29.71875"
                                height="32"
                                viewBox="0 0 951 1024"
                              >
                                <path d="M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z"></path>
                              </svg>
                            </span>
                            <span class="shared-counts-label">Tweet</span>
                          </span>
                        </a>
                        <a
                          href="https://www.linkedin.com/"
                          title="Share on LinkedIn"
                          target="_blank"
                          rel="noreferrer"
                          class="shared-counts-button linkedin shared-counts-no-count"
                          data-postid="562"
                          data-social-network="LinkedIn"
                          data-social-action="Share"
                          data-social-target="index.html"
                        >
                          <span class="shared-counts-icon-label">
                            <span class="shared-counts-icon">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="27.4375"
                                height="32"
                                viewBox="0 0 878 1024"
                              >
                                <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286q0.571 41.714-28.857 69.714t-77.429 28h-1.143q-46.857 0-75.429-28t-28.571-69.714q0-42.286 29.429-70t76.857-27.714 76 27.714 29.143 70zM877.714 598.857v324.571h-188v-302.857q0-60-23.143-94t-72.286-34q-36 0-60.286 19.714t-36.286 48.857q-6.286 17.143-6.286 46.286v316h-188q1.143-228 1.143-369.714t-0.571-169.143l-0.571-27.429h188v82.286h-1.143q11.429-18.286 23.429-32t32.286-29.714 49.714-24.857 65.429-8.857q97.714 0 157.143 64.857t59.429 190z"></path>
                              </svg>
                            </span>
                            <span class="shared-counts-label">LinkedIn</span>
                          </span>
                        </a>
                        <a
                          href="https://pinterest.com"
                          title="Share on Pinterest"
                          target="_blank"
                          rel="noreferrer"
                          class="shared-counts-button pinterest shared-counts-no-count"
                          data-postid="562"
                          data-pin-do="none"
                          data-social-network="Pinterest"
                          data-social-action="Pin"
                          data-social-target="index.html"
                        >
                          <span class="shared-counts-icon-label">
                            <span class="shared-counts-icon">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="22.84375"
                                height="32"
                                viewBox="0 0 731 1024"
                              >
                                <path d="M0 341.143q0-61.714 21.429-116.286t59.143-95.143 86.857-70.286 105.714-44.571 115.429-14.857q90.286 0 168 38t126.286 110.571 48.571 164q0 54.857-10.857 107.429t-34.286 101.143-57.143 85.429-82.857 58.857-108 22q-38.857 0-77.143-18.286t-54.857-50.286q-5.714 22.286-16 64.286t-13.429 54.286-11.714 40.571-14.857 40.571-18.286 35.714-26.286 44.286-35.429 49.429l-8 2.857-5.143-5.714q-8.571-89.714-8.571-107.429 0-52.571 12.286-118t38-164.286 29.714-116q-18.286-37.143-18.286-96.571 0-47.429 29.714-89.143t75.429-41.714q34.857 0 54.286 23.143t19.429 58.571q0 37.714-25.143 109.143t-25.143 106.857q0 36 25.714 59.714t62.286 23.714q31.429 0 58.286-14.286t44.857-38.857 32-54.286 21.714-63.143 11.429-63.429 3.714-56.857q0-98.857-62.571-154t-163.143-55.143q-114.286 0-190.857 74t-76.571 187.714q0 25.143 7.143 48.571t15.429 37.143 15.429 26 7.143 17.429q0 16-8.571 41.714t-21.143 25.714q-1.143 0-9.714-1.714-29.143-8.571-51.714-32t-34.857-54-18.571-61.714-6.286-60.857z"></path>
                              </svg>
                            </span>
                            <span class="shared-counts-label">Pin</span>
                          </span>
                        </a>
                      </div>{" "}
                    </div>
                    <div class="row">
                      <div class="col-xl-8 axil-main">
                        <article class="post-details">
                          <p>{post?.details}</p>
                          {post?.otherImages?.length &&
                            post?.otherImages.map((img) => (
                              <div>
                                <figure class="wp-block-image alignwide">
                                  <img
                                    width="810"
                                    height="608"
                                    src={img}
                                    alt=""
                                    class="wp-image-542"
                                    sizes="(max-width: 810px) 100vw, 810px"
                                  />
                                </figure>
                              </div>
                            ))}
                        </article>
                        <div class="tag entry-tags">
                          <span>Tags:</span>
                          <Link
                            to={`/categories?category=${post?.category}`}
                            rel="tag"
                          >
                            {post?.category}
                          </Link>{" "}
                        </div>
                        <div class="post-shares m-t-xs-60">
                          <div class="title">Share:</div>
                          <div class="shared-counts-wrap after_content style-axil_style">
                            <a
                              href="https://www.facebook.com"
                              title="Share on Facebook"
                              target="_blank"
                              rel="noreferrer"
                              class="shared-counts-button facebook shared-counts-no-count"
                              data-postid="562"
                              data-social-network="Facebook"
                              data-social-action="Share"
                              data-social-target="index.html"
                            >
                              <span class="shared-counts-icon-label">
                                <span class="shared-counts-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18.8125"
                                    height="32"
                                    viewBox="0 0 602 1024"
                                  >
                                    <path d="M548 6.857v150.857h-89.714q-49.143 0-66.286 20.571t-17.143 61.714v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571q0-106.286 59.429-164.857t158.286-58.571q84 0 130.286 6.857z"></path>
                                  </svg>
                                </span>
                                <span class="shared-counts-label">
                                  Facebook
                                </span>
                              </span>
                            </a>
                            <a
                              href="https://twitter.com"
                              title="Share on Twitter"
                              target="_blank"
                              rel="noreferrer"
                              class="shared-counts-button twitter shared-counts-no-count"
                              data-postid="562"
                              data-social-network="Twitter"
                              data-social-action="Tweet"
                              data-social-target="index.html"
                            >
                              <span class="shared-counts-icon-label">
                                <span class="shared-counts-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29.71875"
                                    height="32"
                                    viewBox="0 0 951 1024"
                                  >
                                    <path d="M925.714 233.143q-38.286 56-92.571 95.429 0.571 8 0.571 24 0 74.286-21.714 148.286t-66 142-105.429 120.286-147.429 83.429-184.571 31.143q-154.857 0-283.429-82.857 20 2.286 44.571 2.286 128.571 0 229.143-78.857-60-1.143-107.429-36.857t-65.143-91.143q18.857 2.857 34.857 2.857 24.571 0 48.571-6.286-64-13.143-106-63.714t-42-117.429v-2.286q38.857 21.714 83.429 23.429-37.714-25.143-60-65.714t-22.286-88q0-50.286 25.143-93.143 69.143 85.143 168.286 136.286t212.286 56.857q-4.571-21.714-4.571-42.286 0-76.571 54-130.571t130.571-54q80 0 134.857 58.286 62.286-12 117.143-44.571-21.143 65.714-81.143 101.714 53.143-5.714 106.286-28.571z"></path>
                                  </svg>
                                </span>
                                <span class="shared-counts-label">Tweet</span>
                              </span>
                            </a>
                            <a
                              href="https://www.linkedin.com"
                              title="Share on LinkedIn"
                              target="_blank"
                              rel="noreferrer"
                              class="shared-counts-button linkedin shared-counts-no-count"
                              data-postid="562"
                              data-social-network="LinkedIn"
                              data-social-action="Share"
                              data-social-target="index.html"
                            >
                              <span class="shared-counts-icon-label">
                                <span class="shared-counts-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27.4375"
                                    height="32"
                                    viewBox="0 0 878 1024"
                                  >
                                    <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286q0.571 41.714-28.857 69.714t-77.429 28h-1.143q-46.857 0-75.429-28t-28.571-69.714q0-42.286 29.429-70t76.857-27.714 76 27.714 29.143 70zM877.714 598.857v324.571h-188v-302.857q0-60-23.143-94t-72.286-34q-36 0-60.286 19.714t-36.286 48.857q-6.286 17.143-6.286 46.286v316h-188q1.143-228 1.143-369.714t-0.571-169.143l-0.571-27.429h188v82.286h-1.143q11.429-18.286 23.429-32t32.286-29.714 49.714-24.857 65.429-8.857q97.714 0 157.143 64.857t59.429 190z"></path>
                                  </svg>
                                </span>
                                <span class="shared-counts-label">
                                  LinkedIn
                                </span>
                              </span>
                            </a>
                            <a
                              href="https://pinterest.com"
                              title="Share on Pinterest"
                              target="_blank"
                              rel="noreferrer"
                              class="shared-counts-button pinterest shared-counts-no-count"
                              data-postid="562"
                              data-pin-do="none"
                              data-social-network="Pinterest"
                              data-social-action="Pin"
                              data-social-target="index.html"
                            >
                              <span class="shared-counts-icon-label">
                                <span class="shared-counts-icon">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22.84375"
                                    height="32"
                                    viewBox="0 0 731 1024"
                                  >
                                    <path d="M0 341.143q0-61.714 21.429-116.286t59.143-95.143 86.857-70.286 105.714-44.571 115.429-14.857q90.286 0 168 38t126.286 110.571 48.571 164q0 54.857-10.857 107.429t-34.286 101.143-57.143 85.429-82.857 58.857-108 22q-38.857 0-77.143-18.286t-54.857-50.286q-5.714 22.286-16 64.286t-13.429 54.286-11.714 40.571-14.857 40.571-18.286 35.714-26.286 44.286-35.429 49.429l-8 2.857-5.143-5.714q-8.571-89.714-8.571-107.429 0-52.571 12.286-118t38-164.286 29.714-116q-18.286-37.143-18.286-96.571 0-47.429 29.714-89.143t75.429-41.714q34.857 0 54.286 23.143t19.429 58.571q0 37.714-25.143 109.143t-25.143 106.857q0 36 25.714 59.714t62.286 23.714q31.429 0 58.286-14.286t44.857-38.857 32-54.286 21.714-63.143 11.429-63.429 3.714-56.857q0-98.857-62.571-154t-163.143-55.143q-114.286 0-190.857 74t-76.571 187.714q0 25.143 7.143 48.571t15.429 37.143 15.429 26 7.143 17.429q0 16-8.571 41.714t-21.143 25.714q-1.143 0-9.714-1.714-29.143-8.571-51.714-32t-34.857-54-18.571-61.714-6.286-60.857z"></path>
                                  </svg>
                                </span>
                                <span class="shared-counts-label">Pin</span>
                              </span>
                            </a>
                          </div>{" "}
                        </div>
                        <hr class="m-t-xs-60 m-b-xs-60" />

                        <div id="comments" class="comments-section">
                          <div class="reply-separator"></div>
                          <div class="row  post-navigation-wrapper m-b-xs-60">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div
                                class="post-navigation"
                                style={{
                                  backgroundImage: `url(${posts[prevPostIndex]?.image})`,
                                }}
                              >
                                <div class="post-nav-content">
                                  <Link
                                    to={`/post?post_id=${posts[prevPostIndex]?._id}`}
                                    class="prev-post"
                                  >
                                    <i class="feather icon-chevron-left"></i>
                                    Previous Post{" "}
                                  </Link>
                                  <h3>
                                    <Link
                                      to={`/post?post_id=${posts[prevPostIndex]?._id}`}
                                    >
                                      {posts[prevPostIndex]?.title}
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div
                                class="post-navigation text-right"
                                style={{
                                  backgroundImage: `url(${posts[nextPostIndex]?.image})`,
                                }}
                              >
                                <div class="post-nav-content">
                                  <Link
                                    to={`/post?post_id=${posts[nextPostIndex]?._id}`}
                                    class="next-post"
                                  >
                                    Next Post
                                    <i class="feather icon-chevron-right"></i>
                                  </Link>
                                  <h3>
                                    <Link
                                      to={`/post?post_id=${posts[nextPostIndex]?._id}`}
                                    >
                                      {posts[nextPostIndex]?.title}
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {relatedPosts.filter((post) => post._id !== id).length ? (
                    <div class="related-post p-b-xs-30">
                      <div class="container">
                        <div class="section-title m-b-xs-30">
                          <h2 class="axil-title">Related Posts</h2>
                        </div>
                        <div class="grid-wrapper">
                          <div class="row">
                            {relatedPosts
                              .filter((post) => post._id !== id)
                              .map((post) => (
                                <div class="col-lg-3 col-md-4">
                                  <div class="content-block m-b-xs-30">
                                    <Link
                                      to={`/post?post_id=${post._id}`}
                                      title="Boxed Water Partners With Rag &#038; Bone To Tap Consumer Creativity"
                                    >
                                      <img
                                        class="img-fluid"
                                        src={post.image}
                                        alt=""
                                      />
                                    </Link>
                                    <div class="media-caption grad-overlay">
                                      <div class="caption-content">
                                        <h3 class="axil-post-title hover-line">
                                          <Link
                                            to={`/post?post_id=${post._id}`}
                                          >
                                            {post.title}
                                          </Link>
                                        </h3>
                                        <div class="caption-meta">
                                          By &nbsp;
                                          <a
                                            href="../author/axilthemes/index.html"
                                            title="Posts by axilthemes"
                                            rel="author"
                                          >
                                            {post.poster}
                                          </a>{" "}
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
                  ) : null}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </main>
      </div>
      <a href="#" class="axil-top-scroll animated bounce faster">
        <i class="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Post;
