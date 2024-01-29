import { useState, useEffect } from "react";
import Item from "../components/Item";

const ItemList = ({items}) => {
    const [productosItem, setProductosItem] = useState ([]);
    
    useEffect(() => {
        setProductosItem(items);
    }, [items])
 
    return(
        <>
        {productosItem.map(produ => (
            <div key={produ.id} className="col-md-3">
                <Item producto={produ}/>
            </div>
        ))}
        </>
    )
}
export default ItemList;