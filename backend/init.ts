import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
//   measurementId: process.env.measurementId

apiKey: "AIzaSyAxaTesdSXVprkfKTbsGtJQV2x-hZqm94A",
authDomain: "unity-firebase-80854.firebaseapp.com",
projectId: "unity-firebase-80854",
storageBucket: "unity-firebase-80854.appspot.com",
messagingSenderId: "556420036858",
appId: "1:556420036858:web:709997fb3018e14bcdb143",
measurementId: "G-VQVLS7P7TF"
};

interface Project {
    id: string
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
const db = getFirestore(app);

// Collection
const colref = collection(db, 'projects');

const getData = () => {
    getDocs(colref).then((snapshot) => {
        let projects: Project[] = []
        snapshot.docs.forEach((doc) =>{
            projects.push({ ...doc.data(), id: doc.id})
        })
        console.log(projects)
    }).catch(err =>{
        console.log(err.message)
    })
};

export default getData;
