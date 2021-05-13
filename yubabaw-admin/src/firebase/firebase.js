import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDEzR8EvV5cXhi9XQkfPBnIQOgZ1WoJbx8",
    authDomain: "yubabaw-ca2e2.firebaseapp.com",
    databaseURL: "https://yubabaw-ca2e2.firebaseio.com",
    projectId: "yubabaw-ca2e2",
    storageBucket: "yubabaw-ca2e2.appspot.com",
    messagingSenderId: "480950236492",
    appId: "1:480950236492:web:fd7d3680aad97a3da78be9",
    measurementId: "G-BWV6PK17G6"
};

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.storage = app.storage()
        this.db = app.firestore()
    }

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password)
    logOut = () => this.auth.signOut()
    upload = (image) => this.storage.ref().child(image)
    download = (imageRef) => this.storage.ref().child(imageRef)
    setImageURL = (collection) => this.db.collection(collection)
    getImageURL = (collection) => this.db.collection(collection)
    deleteImage = (image) => this.storage.ref().child(image)
    deleteImageURL = (collection) => this.db.collection(collection)
} 


export default Firebase