import { useEffect, useState } from "react";
import ItemList from "../components/ItemList"
import Carousel from "./Carousel";
import { useParams } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import { getDocuments, getDocumentsq } from "../services/firebase";
import arrayProductos from "./json/products.json"
import { addDoc } from "firebase/firestore";
import Loading from "./loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]); 
    const {id} = useParams();
    const [loading, setLoading] = useState();
    
    // **** script for uploading items from json to firestore ***
    // useEffect (() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, items);
    //     arrayProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);

    //     });
    //     console.log("Products uploaded!");
    // },[])    

    useEffect(() => {
        if(id) {
            const db = getFirestore();
            const colRef = collection(db, "items");
            const q = query(colRef, where("category", "==", id));
            const data = getDocumentsq("items", q)
            .then(res => setItems(res));
            setLoading(false);
        } else {
            const data = getDocuments("items")
            .then(res => setItems(res) );
            setLoading(false);
        }
    },[id]);

    return (
            <>
            <div className="row">
                <div className="col">
                    <Breadcrumb page={id} clase={"breadcrumb fs-3"}/>
                </div>
            </div>
            <div className="row">
                {id ? "" : <Carousel/>} 
                {loading ? <Loading/>: <ItemList items={items}/>}
            </div>
        </>
    )
}

export default ItemListContainer;
