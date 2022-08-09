import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4OMZEWOTx6LoclrGrZVFIIA2p_4mgkN4",
  authDomain: "agenda-react-08-2022-2c1ef.firebaseapp.com",
  projectId: "agenda-react-08-2022-2c1ef",
  storageBucket: "agenda-react-08-2022-2c1ef.appspot.com",
  messagingSenderId: "723805595440",
  appId: "1:723805595440:web:1b0da262094817d7700af5"
};

const agendaAPI = initializeApp(firebaseConfig);

export default agendaAPI;
