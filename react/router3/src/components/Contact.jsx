import React from "react";
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
//firebase추가
import { db } from "../firebase";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //firebase추가
  const [isSubmitting, setIsSubmitting] = useState(false);
  // isSubmitting 폼 제출 중인지 여부를 나타내는 상태(로딩 표시용)
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  // submitStatus 제출 성공/실패 상태('success' 또는 'error')
  //
  const handleSubmit = async (e) => {
    //async, await 비동기작업
    e.preventDefault(); //a태그 클릭 시 써주기
    setIsSubmitting(true); //전송중
    setSubmitStatus(null);

    //try제대로 작동 시, catch뭔가 오류났을 때, finally오류 났든 안 났든
    try {
      // Firebase Firestore에 데이터 저장
      await addDoc(collection(db, "contacts"), {
        //addDo; firestore저장명령어
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(), //서버시간 기록
      });

      // 성공 메시지
      setSubmitStatus("success");
      alert("Thank you for your message! Your message has been saved.");
      setFormData({ name: "", email: "", message: "" }); //폼 초기화
    } catch (error) {
      // 에러 처리
      console.error("Error saving contact:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Feel free to reach out if you want to collaborate or just want to
            chat
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let's Talk</h3>
              <p className="contact-info-text">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to get in
                touch.
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-purple">
                  <FiMail />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:your.email@example.com">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-blue">
                  <FiPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon contact-icon-green">
                  <FiMapPin />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>New York, USA</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p style={{ color: "#10b981", textAlign: "center" }}>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p style={{ color: "#ef4444", textAlign: "center" }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </section>
  );
}
