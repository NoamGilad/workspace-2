const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://workspace-2-8e038-default-rtdb.firebaseio.com";

firestoreService.initializeFirebaseApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");
