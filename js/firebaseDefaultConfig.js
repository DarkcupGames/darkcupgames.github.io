const firebaseConfig = {
    apiKey: "AIzaSyAm8rCcJgdE-2HW0UnR4rcmi4a8OhGUqZ4",
    authDomain: "admin-board-23bae.firebaseapp.com",
    databaseURL: "https://admin-board-23bae-default-rtdb.firebaseio.com",
    projectId: "admin-board-23bae",
    storageBucket: "admin-board-23bae.appspot.com",
    messagingSenderId: "94548300181",
    appId: "1:94548300181:web:623ea09099f64887a2e69c",
    measurementId: "G-GM66T5J1E3"
  };

//Default conffig
const app = firebase.initializeApp(firebaseConfig, 'main');
const defaultDb = firebase.database(app);
const databaseConfig = defaultDb.ref('databaseConfig');