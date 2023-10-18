import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./components/Home/Home.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./wp-content/plugins/instagram-feed/css/sbi-styles.mindc24.css?ver=6.0.4";
import "./wp-includes/css/dist/block-library/style.min7404.css?ver=5.9.3";
import "./wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-vendors-stylee1b2.css?ver=6.9.0";
import "./wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/wc-blocks-stylee1b2.css?ver=6.9.0";
import "./wp-content/plugins/accesspress-social-counter/css/fontawesome-all2c00.css?ver=1.9.2";
import "./wp-content/plugins/accesspress-social-counter/css/frontend2c00.css?ver=1.9.2";
import "./wp-content/plugins/contact-form-7/includes/css/styles5406.css?ver=5.5.6";
import "./wp-content/plugins/woocommerce/assets/css/woocommerce-layout9b30.css?ver=6.3.1";
import "./wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen9b30.css?ver=6.3.1";
import "./wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min7816.css?ver=5.15.0";
import "./wp-content/plugins/elementor/assets/css/frontend-lite.min822f.css?ver=3.6.2";
import "./wp-content/uploads/elementor/css/post-58d38.css?ver=1649767319";
import "./wp-content/uploads/elementor/css/post-188d38.css?ver=1649767319";
import "./wp-content/themes/papr/assets/css/my_switcher330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/fontawesome-all.min330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/plyr330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/iconfont330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/animate330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/bootstrap.min330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/style330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/mcustom330a.css?ver=1.4.1";
import "./wp-content/themes/papr/assets/css/dark330a.css?ver=1.4.1";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
