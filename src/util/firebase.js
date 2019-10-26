import firebase from "firebase"
import config from "./config"

firebase.initializeApp(config)
firebase.analytics()

export default firebase