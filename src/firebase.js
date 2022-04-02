import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANEe7BfHEoECUBwLy48eDTaStmd2j1OCk",
  authDomain: "idobatakaigi-with-ham-a67af.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-a67af",
  storageBucket: "idobatakaigi-with-ham-a67af.appspot.com",
  messagingSenderId: "59878027798",
  appId: "1:59878027798:web:173a2d0514581b2572fb37"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef=database.ref('messages')

export const pushMessage = ({name,text}) =>{
    messagesRef.push({name,text})
}