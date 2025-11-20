const milestones = [
  {
    title: "신사 티룸",
    description:
      "신사티룸은 일상 속 놓치기 쉬운 감각에 집중할 수 있는 공간입니다. ",
    img: "/tea-img/tea-set-4709640_1280.jpg",
  },
  {
    title: "성수 티룸",
    description: "성수티룸은 가장 일상적인 차를 제안합니다. ",
    img: "/tea-img/green-tea-6078275_1280.jpg",
  },
  {
    title: "하동 티룸",
    description: "하동티룸은 다양한 차를 맛보고 시음할 수 있습니다. ",
    img: "/tea-img/moc-chau-tea-hills-2094184_1280.jpg",
  },
];
export default function Franchise() {
  return (
    <div className="page franchise-page">
      <section className="page-hero tearoom">
        <div className="container ">
          <h1>Tearoom</h1>
          <p>
            책을 읽으면서, 대화를 하면서, 혹은 노트북을 펼쳐두고 작업을 하는
            순간에도
            <br /> 차를 곁들이는 모습을 상상하며 준비한 공간입니다.
          </p>
        </div>
      </section>

      <section className="container milestone-grid">
        {milestones.map((milestone) => (
          <article
            key={milestone.title}
            className="milestone-card img"
            style={{
              backgroundImage: `url(${milestone.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="ho"></div>
            <h2>{milestone.title}</h2>
            <p>{milestone.description}</p>
          </article>
        ))}
      </section>

      <section className="franchise-contact">
        <div className="container contact-inner">
          <div>
            <h3>가맹 신청 &amp; 문의</h3>
            <p>
              온라인으로 신청서를 작성하거나 가까운 지사에 문의하시면 상세한
              안내를 도와드립니다.
            </p>
            <ul>
              <li>대표전화: 02-000-000</li>
              <li>지사 안내: 수도권 / 지방</li>
              <li>사업설명회: 정기 개최, 사전 예약 필수</li>
            </ul>
          </div>
          <div className="contact-actions">
            <a
              className="btn btn-secondary"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              가맹 신청
            </a>
            <a
              className="btn btn-outline"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              지사 안내
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
