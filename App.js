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
      {header5}
      <h1 className="functionComponent-title">
        Heading h1 using functionComponent
      </h1>
      <h2 className="functionComponent-title">
        Heading h2 using functionComponent
      </h2>
      <h3 className="functionComponent-title">
        Heading h3 using functionComponent
      </h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(headerJSX);
root.render(<HeaderComponent />);
