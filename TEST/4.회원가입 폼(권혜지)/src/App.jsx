import React from "react";
import { useState } from "react";
import "./App.css";
import JSConfetti from "js-confetti";

export default function App() {
  //폼데이터 상태관리- 사용자 입력 값
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    tel: "",
  });

  //touched 상태
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    confirmpassword: false,
    name: false,
    tel: false,
  });

  //비밀번호 보기/숨기기 상태
  const [showPassword, setShowPassword] = useState(false);

  //유효성 검사 함수들
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // username은 공백이나 @를 포함할 수 없고, 하나 이상의 문자가 존재해야 함
    // domain도 공백과 @를 제외한 문자로 이루어져야
    // extention(.com등)은 공백과 @를 제외한 문자로 이루어져야 하며 마침표로 구분
    return emailRegex.test(email);
    //test 정규표현식 메서드 -> 일치하면 true, 하지않으면 false
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };
  const validateName = (name) => {
    return name.trim().length >= 2;
    //name의 값이 앞뒤 공백을 제거한 후의 길이가 2 이상인지 확인하여 그 결과를 반환
  };
  const validateTel = (tel) => {
    const telRegex = /01[0-9]([-]?)\d{3,4}([-]?)\d{4}/;
    return telRegex.test(tel);
  };

  //에러 메시지 생성
  const getErrors = () => {
    const errors = {};
    //빈 객체 배열 생성 -> 에러 발생 시 {}에 저장
    if (touched.email && !validateEmail(formData.email)) {
      errors.email = "올바른 이메일 형식이 아닙니다.";
    }
    if (touched.password && !validatePassword(formData.password)) {
      errors.password = "비밀번호는 8자 이상, 영문+숫자를 포함해야 합니다.";
    }
    if (
      touched.confirmpassword &&
      formData.password !== formData.confirmpassword
    ) {
      errors.confirmpassword = "비밀번호가 일치하지 않습니다.";
    }
    if (touched.name && !validateName(formData.name)) {
      errors.name = "이름은 2자 이상이어야 합니다.";
    }
    if (touched.tel && !validateTel(formData.tel)) {
      errors.tel = "전화번호 형식으로 입력해주세요.";
    }
    return errors;
  };
  const errors = getErrors();

  //폼 유효성 검사
  //제출버튼 활성화 조건
  const isFormValid = () => {
    return (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.password === formData.confirmpassword &&
      validateName(formData.name) &&
      validateTel(formData.tel)
    );
  };

  //입력 변경 핸들러(여러 개의 입력창에 실시간 입력 반영)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //기존에 있는 데이터를 유지하며, 새 값을 입력할 수 있게 도와줌
      [name]: value,
    });
  };
  //블러 핸들러(필드에서 포커스가 벗어날 때)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      alert(
        `회원가입 성공!!\n\n이름: ${formData.name}\n이메일:${formData.email}`
      );

      // 제출버튼 누르면 폼 초기화
      setFormData({
        email: "",
        password: "",
        confirmpassword: "",
        name: "",
        tel: "",
      });
      setTouched({
        email: false,
        password: false,
        confirmpassword: false,
        name: false,
        tell: false,
      });
    }
  };
  //불꽃놀이, 컨페티
  const [isOn, setIsOn] = useState(false); // 불꽃놀이 상태 관리
  const jsConfetti = new JSConfetti();

  const handleClick = () => {
    // 버튼이 이미 애니메이션 중일 때는 다시 클릭해도 무시
    if (isOn) return;
    // 클릭 시 'on' 상태로 변경하여 애니메이션 시작
    setIsOn(true);

    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      confettiRadius: 5,
      confettiNumber: 500,
    });
  };

  // 'on' 클래스 상태에 따라 버튼의 클래스 이름을 동적으로 설정
  const buttonClasses = `btn-firework ${isOn ? "on" : ""}`;

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <h1 style={styles.title}>회원가입</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* 이메일 */}
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              이메일 *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.email ? "#dc3545" : "#ddd",
              }}
              placeholder="example@email.com"
            />
            {errors.email && <p style={styles.errorText}>❌{errors.email}</p>}
            {/* error.email(true)일 때 */}
            {touched.email &&
              // 내용이 있고 이메일이 제대로 입력
              !errors.email &&
              formData.email && (
                <p style={styles.successText}>✅ 올바른 이메일 형식입니다</p>
              )}
          </div>
          {/* 비밀번호 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 *</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  ...styles.input,
                  borderColor: errors.password ? "#dc3545" : "#ddd",
                }}
                placeholder="8자 이상, 영문+숫자"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.toggleButton}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <p style={styles.errorText}>❌ {errors.password}</p>
            )}
            {touched.password && !errors.password && formData.password && (
              <p style={styles.successText}>✅ 안전한 비밀번호입니다</p>
            )}
          </div>
          {/* 비밀번호 확인 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>비밀번호 확인 *</label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="비밀번호 재입력"
              value={formData.confirmpassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.password ? "#dc3545" : "#ddd",
              }}
            />
            {errors.confirmpassword && (
              <p style={styles.errorText}>❌ {errors.confirmpassword}</p>
            )}
            {touched.confirmpassword &&
              !errors.confirmpassword &&
              formData.confirmpassword && (
                <p style={styles.successText}>✅ 비밀번호가 일치합니다</p>
              )}
          </div>
          {/* 이름 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>이름 *</label>
            <input
              type="text"
              name="name"
              placeholder="홍길동"
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.name}
              style={{
                ...styles.input,
                borderColor: errors.name ? "#dc3545" : "#ddd",
              }}
            />
            {errors.name && <p style={styles.errorText}>❌ {errors.name}</p>}
            {touched.name && !errors.name && formData.name && (
              <p style={styles.successText}>✅ 유효한 이름입니다</p>
            )}
          </div>
          {/* 전화번호 */}
          <div style={styles.formGroup}>
            <label style={styles.label}>전화번호 *</label>
            <input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                ...styles.input,
                borderColor: errors.email ? "#dc3545" : "#ddd",
              }}
              placeholder="010-1234-5678"
            />
            {errors.tel && <p style={styles.errorText}>❌{errors.tel}</p>}
            {/* error.email(true)일 때 */}
            {touched.tel &&
              // 내용이 있고 이메일이 제대로 입력
              !errors.tel &&
              formData.tel && (
                <p style={styles.successText}>✅ 멋진 전화번호!</p>
              )}
          </div>
          {/* 제출버튼 */}
          <button
            className={buttonClasses}
            onClick={handleClick}
            type="submit"
            disabled={!isFormValid()}
            style={{
              ...styles.submitButton,
              backgroundColor: isFormValid() ? "#28a745" : "#ccc",
              cursor: isFormValid() ? "pointer" : "not-allowed",
            }}
          >
            가입하기
            <span className="firework"></span>
            <span className="firework"></span>
            <span className="firework"></span>
            <span className="firework"></span>
            <span className="firework"></span>
          </button>
        </form>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  formCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "2.5rem",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "500px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "2rem",
    fontSize: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    color: "#333",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },
  input: {
    padding: "12px",
    fontSize: "1rem",
    border: "2px solid #ddd",
    borderRadius: "5px",
    outline: "none",
    transition: "border-color 0.3s",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  toggleButton: {
    position: "absolute",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  errorText: {
    color: "#dc3545",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  successText: {
    color: "#28a745",
    fontSize: "0.875rem",
    marginTop: "0.5rem",
    margin: "0.5rem 0 0 0",
  },
  submitButton: {
    padding: "14px",
    fontSize: "1.1rem",
    color: "white",
    border: "none",
    borderRadius: "5px",
    marginTop: "1rem",
    transition: "background-color 0.3s",
    fontWeight: "bold",
  },
};
