import {  collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"
// datos de la coleccion
const productCollection = collection(db, 'Crud-react-productos')

// -- Añadir productos ----

export const addProduct = async (product) => {
    try{
        const docRef = await addDoc(productCollection, product)
        return docRef.id

    }catch(err){
        console.log("Error al añadir un producto",err);
        throw err
    }
}

// cargar productos

export const getProducts = async () => {
    try{
        const data = await getDocs(productCollection)
        return data.docs.map(doc => ({id: doc.id, ...doc.data()}) )
    }catch(err){
        console.log("Error al cargar los productos",err);
        throw err
    }
}

// actualizar un producto

export const updateProduct = async (id, product) => {
    try{
        const productRef = doc(db, 'Crud-react-productos', id)
        await updateDoc(productRef, product)
    }catch(err){
        console.log("Error al actualizar el producto",err);
    }
}


// eliminar un producto mediante id

export const deleteProduct = async (id) => {
    try{
        await deleteDoc(doc(db, 'Crud-react-productos', id))
     
    }catch(err){
        console.log("Error al borrar el producto",err);
        throw err
    }
}