import { useState, useEffect } from "react";
// import Item from "../components/Item";

const ItemList = ({productos}) => {
    const [productosItem, setProductosItem] = useState ([]);

    useEffect(()=>{
        setProductosItem(productos);
    }, [productos])

    return(
        <>
            {/* {productosItem.map(produ => (
                <div key={produ.id} className="col-md-3"> */}
                    {/* <Item producto={produ}/> */}
                {/* </div>
            ))} */}
            <h1>Map de productos</h1>
        </>
    )
}
export default ItemList;