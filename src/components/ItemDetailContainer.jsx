import { useState, useEffect } from "react";
import arrayProductos from "../components/json/products.json";
import ItemDetail from  "../components/ItemDetail"
import { useParams } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(()=>{
                let producto = arrayProductos.find(item => item.id === parseInt(id));
                resolve(producto);
            }, 2000);
        })
        promesa.then(data =>{
            setItem(data);
        })
    },[id]);

    return(
        <>
        <div className="row">
            <div className="col ">
                <Breadcrumb page={item.title} clase={"breadcrumb fs-5"}/>
            </div>
        </div>

        <ItemDetail item = {item}/>
        </>
    )
}
export default ItemDetailContainer;