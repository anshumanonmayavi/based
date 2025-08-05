// File: firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDdfwPNb1ISk2gWjuzriJRh2CGe2gvb3kE",
  authDomain: "based-36821.firebaseapp.com",
  projectId: "based-36821",
  storageBucket: "based-36821.firebasestorage.app",
  messagingSenderId: "813550960543",
  appId: "1:813550960543:web:3912b7d31527b3b44387aa",
  measurementId: "G-BW5N4SQ45K"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

