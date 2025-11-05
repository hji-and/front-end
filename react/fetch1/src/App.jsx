import React from "react";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import "./App.css";

const API_KEY = "800f01ebf3630c060b1b2c206fd77b8c";

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    if (!cityName.trim()) {
      //trim 앞뒤 공백을 제거
      setError("도시 이름을 입력해주세요");
      return; //도시이름 앞뒤에 공백 제거후 아무것도 입력되지 않으면 도시이름 입력하라는 메시지
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        //이전axios.get

        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=kr`
      );
      // http 오류체크 추가
      if (!response.ok) {
        throw new Error(`Http error ! status;${response.status}`);
      }
      //Json 파싱 추가
      const data = await response.json();
      setWeather(data); //이전(response.data)
      //
      setError("");
    } catch (err) {
      console.error("날씨API오류:", err);
      setError("날씨정보를 가져올 수 없습니다. 도시 이름 확인 요망");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };
  //초기 로드 시 서울 날씨 가져오기
  useEffect(() => {
    fetchWeather("Seoul");
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">🌤️날씨앱</h1>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="도시 이름을 입력하세요(예:Seoul, Tokyo)"
            value={city}
            onChange={(e) => setCity(e.target.value)} //input에 써진 걸 가져옴
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            {" "}
            {/* type="submit" 양식제출(전송)버튼, 누르면onSubmit={handleSubmit}함수를 불러서 전송  */}
            {loading ? "검색중....." : "검색"}
          </button>
        </form>
        {error && <div className="error">{error}</div>}
        {weather && !loading && (
          <div className="weather-card">
            <div className="weather-header">
              <h2 className="city-name">
                {weather.name},{weather.sys.country}
              </h2>
              <div className="weather-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                  alt={weather.weather[0].description} //description 접근자 속성은 이 심볼에 대한 설명이 포함된 문자열을 반환하거나 설명이 없는 경우 undefined를 반환
                  //Open Weather - https://openweathermap.org/weather-conditions?utm_source=chatgpt.com
                />
              </div>
            </div>

            <div className="temperature">{Math.round(weather.main.temp)}°C</div>

            <div className="weather-description">
              {weather.weather[0].description}
            </div>

            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">체감 온도</span>
                <span className="detail-value">
                  {Math.round(weather.main.feels_like)}°C
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">습도</span>
                <span className="detail-value">{weather.main.humidity}%</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">풍속</span>
                <span className="detail-value">{weather.wind.speed} m/s</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">기압</span>
                <span className="detail-value">
                  {weather.main.pressure} hPa
                </span>
              </div>
            </div>
          </div> //className="weather-card"
        )}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>날씨정보 불러오는중 .....</p>
          </div>
        )}
      </div>
    </div> //className="app"
  );
}
