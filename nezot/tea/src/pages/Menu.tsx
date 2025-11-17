const menuCategories = [
  //간단 단순 배열은 타입 설정하지 않아도 tsx가 알아서 인식함
  {
    title: "잎차",
    description: "전통 방식으로 제다한 싱글오리진 찻잎입니다",
    items: ["세작녹차", "운남백차", "잭살차", "호지차", "보이숙차"],
  },
  {
    title: "허브차",
    description: "카페인이 없어 언제든 곁에 두기 좋습니다",
    items: ["호박차", "쑥차", "헛개열매차", "감잎차"],
  },
  {
    title: "프리미엄",
    description: "지역과 품종의 특별함과 차별성을 담아냅니다",
    items: ["섬진홍-청향", "섬진홍-진향", "햇우전녹차"],
  },
  {
    title: "블랜딩 티백",
    description: "간편하지만 다채로운 맛과 향을 즐길 수 있습니다",
    items: ["보리우엉차", "목련현미녹차", "시트러스 홍차", "청귤보이차"],
  },
];

export default function Menu() {
  return (
    <div className="page menu-menu">
      <section className="page-hero tealeaf">
        <div className="container">
          <h1>Leaf Tea</h1>
          <p>
            중국 운남, 경남 하동, 제주의 차를 시작으로 다채로운 6대 다류와 한국
            허브의 향미를 전합니다.
          </p>
        </div>
      </section>
      <section className="container menu-grid">
        {menuCategories.map((category) => (
          <article key={category.title} className="menu-card">
            <h2>{category.title}</h2>
            <p className="menu-description">{category.description}</p>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="menu-tips">
        <div className="container tips-inner">
          <div>
            <h3>차를 우리는 TIP</h3>
            <p>박스 패키지 혹은 개별포장의 레시피를 확인하세요.</p>
          </div>
          <ul>
            <li>뜨거운 물로 적신 찻잎의 향기를 즐겨보세요.</li>
            <li>우러난 차의 수색을 감상하세요.</li>
            <li>고온다습한 환경을 피해 실온보관 해주세요.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
