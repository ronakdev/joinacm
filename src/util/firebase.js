import firebase from "firebase"
import config from "./config"

firebase.initializeApp(config)
firebase.analytics()

let db = firebase.database()

/**
 * Sends a spawn request to firebase. Creates a unique ID
 * @param {number} x 
 * @param {number} y 
 * @returns {string} of the new unique id
 */
export function sendSpawn(x, y) {
    let id = uuidv4()
    db.ref("/spawn").set({
        id: id,
        x: x,
        y: y
    })
    return id
}

/**
 * Sets a specified callback function to be called anytime a zombie is killed
 * @param {function: (id: string) => {}} callback - called when a new zombie is killed
 */
export function setOnZombieUpdate(callback) {
    db.ref("/killed").on("value", (snapshot) => {
        let data = snapshot.val()
        // check if data isn't temp
        callback(data)
    })
}

/**
 * Tells the Unity Game to Reset (removes all objects)
 */
export function reset() {
    db.ref("/reset").set(Math.random()) 
    // updates it with any value to trigger an event on the Unity end
}

/**
 * Sets a specified callback function to be called as health is updated
 * @param {function: (health: number) => {}} callback - called when health is updated
 */
export function setOnHealthUpdate(callback) {
    db.ref("/health").on("value", (snapshot) => {
        let data = snapshot.val()
        // check if data isn't temp
        callback(data)
    })
}

export function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export default firebase