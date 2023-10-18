import React from "react";

const Loader = () => {
  return (
    <div>
      <div
        id="theloader"
        style={{
          backgroundImage:
            "url(../wp-content/themes/papr/assets/img/papr-preloader.gif)",
        }}
      ></div>
    </div>
  );
};

export default Loader;
