import app from 'firebase/app'
import 'firebase/firestore'


var config = {
apiKey: "AIzaSyDEzR8EvV5cXhi9XQkfPBnIQOgZ1WoJbx8",
databaseURL: "https://yubabaw-ca2e2.firebaseio.com",
projectId: "yubabaw-ca2e2",
appId: "1:480950236492:web:3d3cdc54afc21417a78be9",
measurementId: "G-36TZSQRGJS"
};

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.db = app.firestore()
    }

    getImageURL = (collection) => this.db.collection(collection)
} 


export default Firebase