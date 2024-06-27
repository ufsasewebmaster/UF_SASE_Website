import admin from 'firebase-admin';
import serviceAccount from './firebase.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sase-website-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

export default db;
