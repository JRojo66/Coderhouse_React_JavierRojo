import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container my-5 offset md-2npm ">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.img} alt={item.title} className="img fluid" />
                </div>
                <div className="col-md-8">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><b>${item.price}</b></p>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;