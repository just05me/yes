export default function Slide4() {
  return (
    <article className="card card--4" aria-labelledby="s4-title">
      <h2 id="s4-title" className="title-sans">Когда ребёнку<br />комфортно{'\u00A0'}— получаются</h2>
      <p className="title-sans" style={{ marginTop: '-4px' }}>
        <span className="hl">Самые живые кадры</span>
      </p>
      <ul className="bullets">
        <li>Удобная одежда по погоде</li>
        <li>Любимая игрушка или плед</li>
        <li>Перекус и{'\u00A0'}вода</li>
        <li>Хорошее настроение</li>
      </ul>
      <figure className="photo photo--wide" style={{ aspectRatio: '4 / 3' }}>
        <img src="/images/photo_4_2026-04-22_17-27-43.jpg" alt="Мама целует ребёнка на природе" loading="lazy" />
      </figure>
    </article>
  );
}
