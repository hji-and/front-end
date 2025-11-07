import { useState } from "react";

function UserInfo({ user, updateUserName, updateUserAge }) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (nameInput.trim()) {
      updateUserName(nameInput);
      setNameInput("");
    }
  };

  const handleAgeSubmit = (e) => {
    e.preventDefault();
    if (ageInput && !isNaN(ageInput)) {
      //!isNaN - not a number가 아니면 실행(숫자면 실행)
      updateUserAge(parseInt(ageInput)); //parseInt - 문자열(string)을 정수(integer)로 변환(10.5->10)
      setAgeInput("");
    }
  };

  return (
    <div className="user-info">
      <div className="user-display">
        <p>
          <strong>이름:</strong> {user.name}
        </p>
        <p>
          <strong>나이:</strong> {user.age}세
        </p>
      </div>

      <form onSubmit={handleNameSubmit} className="form">
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="새 이름 입력"
        />
        <button type="submit">이름 변경</button>
      </form>

      <form onSubmit={handleAgeSubmit} className="form">
        <input
          type="number"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
          placeholder="새 나이 입력"
        />
        <button type="submit">나이 변경</button>
      </form>
    </div>
  );
}

export default UserInfo;
