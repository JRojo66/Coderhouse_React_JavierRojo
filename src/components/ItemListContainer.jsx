import arrayProductos from "../components/json/products.json";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList"
// import ItemCount from "../components/ItemCount";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(()=>{
                resolve(arrayProductos);
            }, 2000);
        })
        promesa.then(data =>{
            setItems(data);
        })
    }, []);

    return (
        <>
            <ItemList items={items}/>;
            {/* <ItemCount stock={10}/>;                         */}
        </>
    )
}

export default ItemListContainer;