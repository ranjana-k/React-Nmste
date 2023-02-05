import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { className: "title", key: "h1" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { className: "title", key: "h2" },
  "Heading 2"
);
const heading3 = React.createElement(
  "h2",
  { className: "title", key: "h3" },
  "Heading3"
);
const header = React.createElement("div", { className: "header" }, [
  heading1,
  heading2,
  heading3,
]);

//using JSX: header Element created

const header5 = <h1>Header5 from React Element</h1>;
const headerJSX = (
  <div className="jsx-header">
    <h1 className="jsx-title">Heading h1 using JSX</h1>
    <h2 className="jsx-title">Heading h2 using JSX</h2>
    <h3 className="jsx-title">Heading h3 using JSX</h3>
  </div>
);

//using Function Component: header Element created
const HeaderComponent = () => {
  return (
    <div className="functionComponent-header">
      <div className="logo">
        <a href="/">
          <img
            alt="logo"
            src="https://www.analyticsinsight.net/wp-content/plugins/gs-logo-slider/assets/img/dummy-data/gs-logo-slider-2.png"
          />
        </a>
      </div>

      <div className="search-container">
        <form action="">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>

      <div className="user-container">
        <a>
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(headerJSX);
root.render(<HeaderComponent />);
