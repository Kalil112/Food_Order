import "../index.css";
import { useContext } from "react";
import image from "../assets/logo.jpg";
import { FoodContext } from "../Store/FoodContext";
const Header = () => {
  const { setCartStatus, orders } = useContext(FoodContext);

  function cartHandler() {
    setCartStatus(true);
  }

  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={image} alt="logo-img" />
          <h1>React Food</h1>
        </div>
        <button onClick={cartHandler}>
          Cart{`(${orders.orderArr.length})`}
        </button>
      </div>
    </>
  );
};
export default Header;
