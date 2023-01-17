import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDk62F3ZJkKfEJiPiqwqGPvcozhydJnK3I",
	authDomain: "bookstore-poc.firebaseapp.com",
	projectId: "bookstore-poc",
	storageBucket: "bookstore-poc.appspot.com",
	messagingSenderId: "262264177055",
	appId: "1:262264177055:web:b79847c9fa918da37d7daa",
	measurementId: "G-GZ9EX2XTLR",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
