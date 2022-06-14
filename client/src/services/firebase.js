// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBBshBByXS-8bSBYTWSUStzfyLp1qrKfac',
	authDomain: 'tails-352713.firebaseapp.com',
	projectId: 'tails-352713',
	storageBucket: 'tails-352713.appspot.com',
	messagingSenderId: '380886144368',
	appId: '1:380886144368:web:f2c5fb8596e8d1bbdf6bb5',
	measurementId: 'G-TWS7G2Y1DG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
