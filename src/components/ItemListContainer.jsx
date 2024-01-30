import arrayProductos from "../components/json/products.json";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList"
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(()=>{
                resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data =>{
            setItems(data);
        })
    }, [id]);

    return (
        <>
            <div className="row">
                <div className="col">
                    <Breadcrumb page={id}/>
                </div>
            </div>
            {id ? "" : <Carousel/>} 
            <ItemList items={items}/>;
        </>
    )
}

export default ItemListContainer;