import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.png";

const Cart = () => {
  const { cart, removeItem, clear, cantTotalProductos, sumaTotalProductos } =
    useContext(CartContext);

  if (cantTotalProductos() == 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p className="display-1">📖</p>
            <div className="alert alert-danger" role="alert">
              The cart is empty!
            </div>
            <Link to="/" className="btn btn-warning my-5">
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Selected products</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <a href="#" onClick={clear} className="btn btn-warning">
                      Empty cart
                      <img src={trash} alt="Delete product" width={30} title="Delete product"/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <b>Product</b>
                  </td>
                  <td>
                    <b>Price/unit</b>
                  </td>
                  <td>
                    <b>Qty</b>
                  </td>
                  <td>
                    <b>Total</b>
                  </td>
                </tr>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img src={product.img} alt={product.title} width={80} />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${(product.quantity * product.price).toFixed(2)}</td>
                    <td>
                      <a href="#" onClick={() => {removeItem(product.id);}}>
                        <img src={trash} alt="Delete product" width={30} title="Delete product"/>
                      </a>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="text-middle">
                    <b>Total</b>
                  </td>
                  <td>${sumaTotalProductos().toFixed(2)}</td>
                  <td className="text-end align-middle">
                    <Link to={"/checkout"} className="btn btn-warning">
                      Checkout
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
