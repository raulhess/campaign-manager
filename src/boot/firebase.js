import { boot } from 'quasar/wrappers'

import { initializeApp } from "firebase/app";

export default boot(async ({ store }) => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARK-0G-67RWD10RZeVdGLpXDmyh1VtBEo",
    authDomain: "campaign-manager-lite.firebaseapp.com",
    projectId: "campaign-manager-lite",
    storageBucket: "campaign-manager-lite.appspot.com",
    messagingSenderId: "653058594394",
    appId: "1:653058594394:web:de304c32d23829491a2a63",
    measurementId: "G-SMLWX6J23K"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  store.dispatch('firebase/addApp', app)
})