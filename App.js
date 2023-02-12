import React from "react";
import ReactDOM from "react-dom/client";

{
  /**
   * Header
   *   - Logo
   *   - Navbar
   *   - Cart
   * Body
   *   - SearchBar
   *   - RestrauntList
   *       - RestrauntCard
   *            - Image
   *            - Name
   *            - Rating
   *            - Cusines
   * Footer
   *   - Link
   *   - Copywrite
   *
   */
}

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img
          alt="logo"
          src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
        />
      </a>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrautList = {
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/7bb739d7f6ae8b4ce8ed590765dffd2f",
  name: "Burger King",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={restrautList.image} />
      <h2>{restrautList.name}</h2>
      <h3>{restrautList.cuisines.join(", ")}</h3>
      <h3>{restrautList.rating} stars</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestrauntCard restraunt={restrautList} />
    </div>
  );
};

const Footer = () => {
  return <h2>Footer</h2>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
