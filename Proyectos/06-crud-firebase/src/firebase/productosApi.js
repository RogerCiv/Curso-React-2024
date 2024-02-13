import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import { db } from "./firebase";
// datos de la coleccion
const productCollection = collection(db, "Crud-react-productos");

// -- Añadir productos ----

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(productCollection, product);
    return docRef.id;
  } catch (err) {
    console.log("Error al añadir un producto", err);
    throw err;
  }
};

// cargar productos

export const getProducts = async () => {
  try {
    const data = await getDocs(productCollection);
    // return data.docs.map(doc => ({id: doc.id, ...doc.data()}) )
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (err) {
    console.log("Error al cargar los productos", err);
    throw err;
  }
};

export const getProductById = async (id) => {
  try {
    const productDocRef = doc(db, "Crud-react-productos", id);
    const data = await getDoc(productDocRef);
    if(productDocRef.exists()){
      return { ...data.data(), id: data.id };
    }
    console.log("El producto con ese id no existe");
    return null;
  } catch (err) {
    console.log("Error al cargar el producto", err);
    throw err;
  }
};

// actualizar un producto

export const updateProduct = async (id, product) => {
  try {
    const productRef = doc(db, "Crud-react-productos", id);
    await updateDoc(productRef, product);
  } catch (err) {
    console.log("Error al actualizar el producto", err);
  }
};



// eliminar un producto mediante id

export const deleteProduct = async (id) => {
  try {
    await deleteDoc(doc(db, "Crud-react-productos", id));
  } catch (err) {
    console.log("Error al borrar el producto", err);
    throw err;
  }
};

// logear usuario con google

export const signWithGoogle = async (signInFirebase, setError, navigate) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  try {
    await setPersistence(auth, browserSessionPersistence);
   const result = await signInWithPopup(auth,provider);
  //  const credential = GoogleAuthProvider.credentialFromResult(result);
  //  const token = credential.accessToken;
   const user = result.user;
   signInFirebase(user);
   navigate("/");

  } catch (error) {
      setError("Error al iniciar sesión",error.message);
  }
};

// cerrar sesion usuario con google

export const signOutWhitGoogle = async () => {
  const auth = getAuth();
  try{
    // await auth.signOut();
    await signOut(auth);
    return true;
  }catch(err){
    console.log("Error al cerrar sesion",err)
    return false
  }

  
}


