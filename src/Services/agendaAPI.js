import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4OMZEWOTx6LoclrGrZVFIIA2p_4mgkN4",
  authDomain: "agenda-react-08-2022-2c1ef.firebaseapp.com",
  projectId: "agenda-react-08-2022-2c1ef",
  storageBucket: "agenda-react-08-2022-2c1ef.appspot.com",
  messagingSenderId: "723805595440",
  appId: "1:723805595440:web:1b0da262094817d7700af5"
};

const agendaAPI = initializeApp(firebaseConfig);
const db = getFirestore(agendaAPI)

  
export const getContacts = async () => {
  const contactList = await getDocs(collection(db, 'contactos'));
  const list = []
  contactList.forEach((doc) => {
    const contacto = doc.data()
    contacto.id = doc.id
    list.push(contacto)
  });
  return list
};

export const addContact = async (props) => {
  
  try {
    const docRef = await addDoc(collection(db, 'contactos'), {
      nombre: props.nombre,
      apellido: props.apellido,
      telefono: props.telefono
     });

    console.log("Document writen with ID: ", docRef.id);
    return docRef;

  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

export default agendaAPI;

