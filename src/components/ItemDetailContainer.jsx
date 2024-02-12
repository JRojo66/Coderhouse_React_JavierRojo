import { useState, useEffect } from "react";
import ItemDetail from  "../components/ItemDetail"
import { useParams } from "react-router-dom";
import Breadcrumb from "./BreadCrumb";
import {getFirestore, getDoc, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db,"items", id);
        getDoc(docRef).then((snapshot) => {
            if (snapshot.exists()){
            setItem({id: snapshot.id, ...snapshot.data()});
            }
        });
    },[])

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