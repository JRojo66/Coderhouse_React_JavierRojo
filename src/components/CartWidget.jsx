import carrito from "../../public/assets/carrito.png"


const CartWidget = () => {
    return(
        <button type="button" className="btn btn-primary btn-transparent text-light position-relative"> <img src={carrito} alt="carrito" className="carrito" />   
            <span className="position-absolute top-50 start-70 translate-middle badge rounded-pill bg-danger">
                22  
            <span className="visually-hidden">unread messages
            </span>
            </span>
        </button>
    )
}

export default CartWidget;