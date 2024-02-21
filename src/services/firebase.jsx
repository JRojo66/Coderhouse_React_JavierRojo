import { getFirestore, getDoc, doc, collection, getDocs } from "firebase/firestore"

export const getDocuments = (colName) => {
    const db  = getFirestore();
    const colRef = collection(db, colName);
    return getDocs(colRef).then((snapshot) => {
        const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return data;
    })
}

export const getDocumentsq = (colName, q) => { /*como getDocuments, pero con un parametro q que hace un query*/
    const db  = getFirestore();
    const colRef = collection(db, colName);
    return getDocs(q).then((snapshot) => {
        const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        return data;
    })
}

export const getOneDocument = (id, collection) => {
    const db  = getFirestore();
    const docRef = doc(db, collection, id);
    return getDoc(docRef).then((snapshot) => {
        if (snapshot.exists()){
        return ({id: snapshot.id, ...snapshot.data()});
        }
    });
}