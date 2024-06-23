import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


function FirebaseConfig() {
  const firebaseConfig = {
    apiKey: "AIzaSyDXCOkXYHg_OzX_ggFkRt_3qvCQ_EV04tY",
    authDomain: "iot-smartfarm-c4396.firebaseapp.com",
    databaseURL: "https://iot-smartfarm-c4396-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iot-smartfarm-c4396",
    storageBucket: "iot-smartfarm-c4396.appspot.com",
    messagingSenderId: "312668970361",
    appId: "1:312668970361:web:62e0d12f80ad03c537a3a8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return {
    database: db,
    storage: storage,
    auth: auth,
    firestore: firestore,
  };
}

export default FirebaseConfig;