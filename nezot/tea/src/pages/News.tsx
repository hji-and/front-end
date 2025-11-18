export default function News() {
  const newsItems = [
    {
      title: "계절의 티코스 25겨울시즌 ",
      tag: "티룸",
      summary:
        "적당히 건조하고 선선한 날씨는 따뜻한 차와 잘 어울리고, 사색하며 한 해의 결실을 헤아려보기에도 좋습니다. ",
    },
    {
      title: "상품 이미지 촬영하는 날",
      tag: "저널",
      summary:
        "찍히는 입장에서는 이런 모습이 보여요. 대기하는 시간을 잘 기다리는 게 관건! 촬영한 사진과 영상들을 몇 개 보여드려요.",
    },
    {
      title: "차 한 잔으로 건네는 반가운 인사",
      tag: "아카이브",
      summary:
        "스기사키 마사노리의 네 번째 개인전이 열리는 TWL, 시음회에는 시원한 물에 24시간 우린 잭살차를 준비했습니다.",
    },
    {
      title: "M&T와 함께하는 SBS 금토드라마 '모나면 뭐 어때'",
      tag: "프로모션",
      summary: "드라마 방영 기념 한정 이벤트와 함께하는 특별한 블랜딩.",
    },
  ];

  return (
    <div className="page news-page">
      <section className="page-hero news">
        <div className="container">
          <h1>Community</h1>
          <p>다양한 이벤트, 프로모션, 광고 소식을 가장 먼저 확인하세요.</p>
        </div>
      </section>
      <section className="container news-list">
        {newsItems.map((item) => (
          <article key={item.title} className="news-card">
            <span className="news-tag">{item.tag}</span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <a className="text-link" href="#" target="_blank" rel="noreferrer">
              자세히 보기 →
            </a>
          </article>
        ))}
      </section>
      <section className="media-banner newss">
        <div className="container">
          <h3>광고 영상 &amp; 캠페인</h3>
          <p>다양한 채널로 전해지는 M&T의 메시지를 만나보세요.</p>
        </div>
      </section>
    </div>
  );
}
