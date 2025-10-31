// Firebase 설정 파일
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
const firebaseConfig = {
  apiKey: "AIzaSyAAcKzE11EHTQMQa4WShFRJV85CQK7G-iU",
  authDomain: "router3-firebase.firebaseapp.com",
  projectId: "router3-firebase",
  storageBucket: "router3-firebase.firebasestorage.app",
  messagingSenderId: "174185238827",
  appId: "1:174185238827:web:18259b05e715389845756e",
  measurementId: "G-B4BMR7FHFR",
  //   apiKey: "YOUR_API_KEY",
  //   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  //   projectId: "YOUR_PROJECT_ID",
  //   storageBucket: "YOUR_PROJECT_ID.appspot.com",
  //   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  //   appId: "YOUR_APP_ID",
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
