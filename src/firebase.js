import * as firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
        apiKey: "AIzaSyAIY5W0kLAww0-veR5EsUkYp_wPvG1lA08",
        authDomain: "projetosoftware-be415.firebaseapp.com",
        databaseURL: "https://projetosoftware-be415.firebaseio.com",
        projectId: "projetosoftware-be415",
        storageBucket: "projetosoftware-be415.appspot.com",
        messagingSenderId: "161783050898",
        appId: "1:161783050898:web:b7d802448323c9006bac4b"
});

export default app;