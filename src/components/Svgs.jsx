import React from "react";

const Svgs = ({ light, setLight, theLight }) => {
  const handleTheme = (theme) => {
    if (theme === "light") {
      setLight(true);
    } else {
      setLight(false);
    }
  };

  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-dark-grayscale">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0 0.49803921568627" />
                <feFuncG type="table" tableValues="0 0.49803921568627" />
                <feFuncB type="table" tableValues="0 0.49803921568627" />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-grayscale">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0 1" />
                <feFuncG type="table" tableValues="0 1" />
                <feFuncB type="table" tableValues="0 1" />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-purple-yellow">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR
                  type="table"
                  tableValues="0.54901960784314 0.98823529411765"
                />
                <feFuncG type="table" tableValues="0 1" />
                <feFuncB
                  type="table"
                  tableValues="0.71764705882353 0.25490196078431"
                />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-blue-red">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0 1" />
                <feFuncG type="table" tableValues="0 0.27843137254902" />
                <feFuncB
                  type="table"
                  tableValues="0.5921568627451 0.27843137254902"
                />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-midnight">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0 0" />
                <feFuncG type="table" tableValues="0 0.64705882352941" />
                <feFuncB type="table" tableValues="0 1" />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-magenta-yellow">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0.78039215686275 1" />
                <feFuncG type="table" tableValues="0 0.94901960784314" />
                <feFuncB
                  type="table"
                  tableValues="0.35294117647059 0.47058823529412"
                />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-purple-green">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR
                  type="table"
                  tableValues="0.65098039215686 0.40392156862745"
                />
                <feFuncG type="table" tableValues="0 1" />
                <feFuncB type="table" tableValues="0.44705882352941 0.4" />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 0 0"
          width="0"
          height="0"
          focusable="false"
          role="none"
          style={{
            visibility: "hidden",
            position: "absolute",
            left: "-9999px",
            overflow: "hidden",
          }}
        >
          <defs>
            <filter id="wp-duotone-blue-orange">
              <feColorMatrix
                color-interpolation-filters="sRGB"
                type="matrix"
                values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
              />
              <feComponentTransfer color-interpolation-filters="sRGB">
                <feFuncR type="table" tableValues="0.098039215686275 1" />
                <feFuncG type="table" tableValues="0 0.66274509803922" />
                <feFuncB
                  type="table"
                  tableValues="0.84705882352941 0.41960784313725"
                />
                <feFuncA type="table" tableValues="1 1" />
              </feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <div id="switcher">
          <ul>
            <li>
              <div
                data-theme="light"
                onClick={() => handleTheme("light")}
                className={
                  theLight ? "themeColor light active" : "themeColor light"
                }
              >
                <span title="Light Mode">Light</span>
              </div>
            </li>
            <li>
              <div
                data-theme="dark"
                onClick={() => handleTheme("dark")}
                className={
                  !theLight ? "themeColor dark active" : "themeColor dark"
                }
              >
                <span title="Dark Mode">Dark</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Svgs;
