import { useEffect, useState } from "react";
import ItemList from "../components/ItemList"
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const colRef = collection(db, "items");
        if(id) {
            const q = query(colRef, where("category", "==", id));
            getDocs(q).then((snapshot) => {
                const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setItems(data);
            })
        } else {
            getDocs(colRef).then((snapshot) => {
                const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
                setItems(data);
            })
        }
    },[id])

    return (
            <>
            <div className="row">
                <div className="col">
                    <Breadcrumb page={id} clase={"breadcrumb fs-3"}/>
                </div>
            </div>
            <div className="row">
                {id ? "" : <Carousel/>} 
                <ItemList items={items}/>;
            </div>
        </>
    )
}

export default ItemListContainer;