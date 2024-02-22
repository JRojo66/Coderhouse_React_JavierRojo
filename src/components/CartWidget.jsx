import { Link } from "react-router-dom";
import carrito from "../assets/carrito.png";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cantTotalProductos } = useContext(CartContext);
  return cantTotalProductos() > 0 ? (
    <Link to={"/cart"} className="btn position-relative">
      <img src={carrito} alt="cart" className="carrito" />
      <span className="position-absolute top-50 start-70 translate-middle badge rounded-pill bg-danger">
        {cantTotalProductos()}
      </span>
    </Link>) 
    : 
    ("");
};

export default CartWidget;
