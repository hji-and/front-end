const steps = [
  {
    number: "🍵",
    title: "도자기",
    description:
      "백자에 유약을 입혀 구웠습니다. 차의 향미를 있는 그대로 표현해주는 소재입니다.",
  },
  {
    number: "🥄",
    title: "잎차 생활을 위한 전자저울",
    description:
      "기본 7가지 야채에 치즈, 에그, 베이컨 등 원하는 토핑을 자유롭게 더합니다.",
  },
  {
    number: "🧮",
    title: "잎차 생활을 위한 전자저울",
    description: "찻잎의 무게는 물론 추출시간까지 잴 수 있어요.",
  },
  {
    number: "🥛",
    title: "세트 업그레이드",
    description:
      "쿠키, 수프, 음료를 더해 풍성한 한 끼를 완성하거나 샐러드로 가볍게 즐겨보세요.",
  },
];

export default function HowToOrder() {
  return (
    <div className="page how-to-order-page">
      <section className="page-hero teaware">
        <div className="container">
          <h1>Teaware</h1>
          <p>시간이 흐르면서 나만의 색으로 물들어가는 다기를 경험해보세요.</p>
        </div>
      </section>
      <section className="steps-section">
        <div className="container step-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-number">{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="online-order">
        <div className="container online-inner">
          <div>
            <h3>온라인 주문으로 더 빠르게</h3>
            <p>
              앱 또는 웹에서 미리 주문하고 픽업하면 대기 없이 편리하게 즐길 수
              있습니다.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.subway.co.kr/app"
            target="_blank"
            rel="noreferrer"
          >
            앱 주문 안내
          </a>
        </div>
      </section>
    </div>
  );
}
