// Firebase 설정 파일
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정 정보
// 실제 프로젝트에 맞게 수정해야 합니다
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_PROJECT_ID.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

const firebaseConfig = {
  apiKey: "AIzaSyB8MoVhFLBV2jZEeGBK7SCZknSeNgap8vI",
  authDomain: "router3-fire-jsk.firebaseapp.com",
  projectId: "router3-fire-jsk",
  storageBucket: "router3-fire-jsk.firebasestorage.app",
  messagingSenderId: "212476549549",
  appId: "1:212476549549:web:36156f4996815bf6382924",
  measurementId: "G-S6R98W7E8K"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

// Firestore 데이터베이스 초기화
export const db = getFirestore(app);
export default app;
