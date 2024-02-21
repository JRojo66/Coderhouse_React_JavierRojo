import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {collection, addDoc, getFirestore} from "firebase/firestore"


const Checkout = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [orderId, SetOrderId] = useState();

    const{cart, clear, cantTotalProductos, sumaTotalProductos} = useContext(CartContext);

    // Validations

    const generateOrder = () => {
        if(name.length === 0){
            return false;
        }
    
        if(email.length === 0){
            return false;
        }

        if(phone.length === 0){
            return false;
        }

        const buyer = {name: name, email: email, phone: phone};
        const items = cart.map(item => ({id: item.idx, title: item.title, quantity: item.quantity, price: item.price}));
        const dateVar = new Date();
        const date =`${dateVar.getDate()}-${dateVar.getMonth()+1}-${dateVar.getFullYear()} ${dateVar.getHours()}:${dateVar.getMinutes()}`
        const total = sumaTotalProductos();
        const order = {buyer: buyer, items: items, date: date, total: total};
        
        // Add document in Firestore
        const db = getFirestore();
        const colRef = collection(db, "orders");
        addDoc(colRef, order).then(res=>{
        clear();
        SetOrderId(res.id);
        });
    }

    return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Checkout</h1>                           
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="mb-3">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" onInput={(e) => {setName(e.target.value)}}/>                            
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}}/>                            
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" className="form-control" onInput={(e) => {setPhone(e.target.value)}}/>                            
                            </div>
                            <button type="button" className="btn btn-primary" onClick={generateOrder}>Submit your order</button>
                        </form>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td><b>Product</b></td>
                                    <td><b>Price/unit</b></td>
                                    <td><b>Qty</b></td>
                                    <td><b>Total</b></td>                                            
                                </tr>
                                {cart.map(product => 
                                    <tr key={product.id}>
                                        <td><img src={product.img} alt={product.title} width={80} /></td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>${(product.quantity * product.price).toFixed(2)}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={3} className="text-middle"><b>Total</b></td>
                                    <td>${sumaTotalProductos().toFixed(2)}</td>
                                </tr>

                            </tbody>
                        </table>                       
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        {orderId ? <div className="alert alert-warning p-5 text-center" role="alert">
                                <p className="display-1">📖</p>
                                <h1>Thanks for your order</h1>
                                <p>Your order id is: <b>{orderId}</b></p>
                            </div>
                        :  
                        "" }
                    </div>

                </div>
            </div>
        )          
};

export default Checkout;