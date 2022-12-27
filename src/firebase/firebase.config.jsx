// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBWr1h5Le2BvhSNgGhx2jiLw5yb9qbKsm4",
//   authDomain: "socialinkd.firebaseapp.com",
//   projectId: "socialinkd",
//   storageBucket: "socialinkd.appspot.com",
//   messagingSenderId: "786364613542",
//   appId: "1:786364613542:web:317808c505877919fa4567"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;
