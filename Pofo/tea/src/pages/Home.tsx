import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Sinsa Tearoom</p>
            <h1>
              우리의 일상을 더욱
              <br />
              <span className="highlight">감각적으로</span>
            </h1>
            <p className="lead">
              보글보글 물이 끓는 주전자와 따뜻한 온기가 전해지는 차 한잔.
            </p>
            <div className="hero-actions">
              <Link to="/franchise" className="btn btn-primary">
                예약
              </Link>
              <Link to="/franchise" className="btn btn-outline">
                티 클래스
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="highlights">
        <div className="container highlight-grid">
          <article className="highlight-card">
            <h3>About</h3>
            <p>
              찻잎을 따고, 말리고, 덖어내는 지난한 과정을 거쳐야만 맛있는 차가
              만들어집니다.
            </p>
            <Link to="/news" className="text-link">
              차를 닮은 삶 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>Our Ways</h3>
            <p>
              매일 손이 가는 맛과 향, 누구나 쉽게 즐길 수 있는 일상의 차를
              소개합니다.
            </p>
            <Link to="/menu" className="text-link">
              특색을 담은 차 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>Our Product</h3>
            <p>단일 지역, 단일 원료로 만들어내는 풍부한 맛과 향을 담습니다.</p>
            <Link to="/menu" className="text-link">
              싱글오리진 →
            </Link>
          </article>
          <article className="highlight-card">
            <h3>Our Mission</h3>
            <p>
              차를 더 가까이 일상을 더 탄탄하게, 매일의 찻자리를 위한 차도구를
              제안합니다.
            </p>
            <Link to="/how-to-order" className="text-link">
              나와 맞는 차 →
            </Link>
          </article>
        </div>
      </section>
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Gift of Life’s Serenity</h2>
            <p>삶의 여유를 전하는 가장 좋은 선물</p>
          </div>
          <a
            className="btn btn-secondary"
            href="#"
            target="_blank"
            rel="noreferrer"
            // 외부사이트로 이동하면 브라우저는 자동으로 어디서 왔는지(referrer)를 전송
            // rel="noreferrer" 적어놓으면 헤더를 보내지 않음, 보안
          >
            온라인 주문하기
          </a>
        </div>
      </section>
    </div>
  );
}
