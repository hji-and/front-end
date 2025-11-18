const steps = [
  {
    number: "🍵",
    title: "도자기",
    description:
      "백자에 유약을 입혀 구웠습니다. 차의 향미를 있는 그대로 표현해주는 소재입니다.",
  },
  {
    number: "🌳",
    title: "나무",
    description:
      "촘촘한 결의 소재를 섬세하게 엮어냈습니다. 100% 수공예로 제작됩니다.",
  },
  {
    number: "🧮",
    title: "전자저울",
    description:
      "잎차 생활을 위한 도구. 찻잎의 무게는 물론 추출시간까지 잴 수 있어요.",
  },
  {
    number: "🥛",
    title: "유리",
    description:
      "우러난 차의 수색을 즐길 수 있는 내열 소재의 티서버와 냉침을 위한 보틀.",
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
      <section className="online-order present">
        <div className="container online-inner ">
          <div>
            <h3>선물 기획전</h3>
            <p>차 선물 세트 최대 20% 할인 혜택과 감사의 달 사은품 증정</p>
          </div>
          <a
            className="btn btn-primary"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            선물 기획전 보러가기
          </a>
        </div>
      </section>
    </div>
  );
}
