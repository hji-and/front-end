/*
#### ✨ 주요 기능
- ✅ JSONPlaceholder API에서 데이터 가져오기
- ✅ 로딩 중 스피너 표시
- ✅ 에러 발생 시 에러 메시지
- ✅ 사용자 카드 형태로 표시 (이름, 이메일, 회사)
- ✅ 새로고침 버튼
*/
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Seach from "./Search";

export default function App() {
  //상태관리
  const [users, setUsers] = useState([]); //users 받아온 사용자데이터를 저장
  const [loading, setLoading] = useState(false); //loading 로딩 여부
  const [error, setError] = useState(null); //error 데이터 저장

  //사용자 데이터 가져오기
  const fetchUsers = async () => {
    //async 함수의 앞에 붙여서 해당 함수가 비동기 함수임을 나타냄
    setLoading(true); //로딩중
    setError(null);

    try {
      const response = await fetch(
        //await 프로그래밍 언어에서 비동기 작업이 완료될 때까지 기다리는 데 사용되는 키워드, 비동기 - 작업이 순차적으로 완료될 때까지 기다리지 않고 다음 코드를 실행하는 프로그래밍 방식
        "https://jsonplaceholder.typicode.com/users"
      );
      //json placeholder users주소 가져옴
      if (!response.ok) {
        //API 응답이 실패하면
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
      const data = await response.json();
      //전달된 응답(response) json객체로 변환하여 data 변수에 저장
      /* 서버가 이런 걸 보냈다고 하면:
      [
        { "id": 1, "name": "홍길동" },
        { "id": 2, "name": "이순신" }
      ]
      → data는 다음과 같은 JS 객체가 됩니다:
      [
        { id: 1, name: "홍길동" },
        { id: 2, name: "이순신" }
      ] */
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  //컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    fetchUsers();
  }, []);

  //새로고침 핸들러
  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div style={styles.container}>
      {/* 헤더 */}
      <header style={styles.header}>
        <h1 style={styles.title}>사용자 목록</h1>
        <button style={styles.refreshButton}>🔄 새로고침</button>
      </header>
      {/* 로딩상태 */}
      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중...</p>
        </div>
      )}
      {/* 로딩 상태 */}
      {loading && (
        <div style={styles.messageContainer}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>로딩중...</p>
        </div>
      )}
      {/* 에러 상태 */}
      {error && (
        <div style={styles.errorContainer}>
          <p style={styles.errorText}>⚠️ {error}</p>
          <button onClick={handleRefresh} style={styles.retryButton}>
            다시 시도
          </button>
        </div>
      )}
      {/* 사용자 목록 */}
      {!loading && !error && (
        <div style={styles.userGrid}>
          {users.map((user) => (
            <div key={user.id} style={styles.userCard} className="userCard">
              <div style={styles.userAvatar}>{user.name.charAt(0)}</div>
              {/* charAt - 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환 */}
              <h3 style={styles.userName}>{user.name}</h3>
              <p style={styles.userEmail}>📧 {user.email}</p>
              <p style={styles.userCompany}>🏢 {user.company.name}</p>
            </div>
          ))}
        </div>
      )}
      {/* 데이터가 없을 때 */}
      {!loading && !error && users.length === 0 && (
        <div style={styles.messageContainer}>
          <p style={styles.emptyText}>사용자 정보가 없습니다.</p>
        </div>
      )}

      <div>
        <Seach />
      </div>
    </div>
  );
}
const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#333",
    fontSize: "2rem",
  },
  refreshButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #f3f3f3",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "1rem",
    fontSize: "1.2rem",
    color: "#666",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  retryButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  userGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  userCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    textAlign: "center",
    //
  },
  userAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "0 auto 1rem",
  },
  userName: {
    margin: "0.5rem 0",
    color: "#333",
    fontSize: "1.2rem",
  },
  userEmail: {
    color: "#666",
    fontSize: "0.9rem",
    margin: "0.5rem 0",
  },
  userCompany: {
    color: "#888",
    fontSize: "0.85rem",
    margin: "0.5rem 0",
  },
  emptyText: {
    fontSize: "1.2rem",
    color: "#999",
  },
};
