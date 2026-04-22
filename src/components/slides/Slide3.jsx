export default function Slide3() {
  return (
    <article className="card card--3" aria-labelledby="s3-title">
      <h2 id="s3-title" className="title-sans">Одежда{'\u00A0'}— это</h2>
      <p className="hl-block">
        <span className="hl" style={{ fontSize: '44px', fontWeight: 700, padding: '2px 14px', fontFamily: "'Cormorant Garamond', serif" }}>80%</span>
        <span className="title-sans" style={{ display: 'inline-block', marginLeft: '6px' }}>успеха</span>
      </p>
      <ul className="bullets">
        <li>Выбирайте выбирайтеа</li>
        <li>Избегайте на пережантка</li>
        <li>Одежда должна япоймать ваши настящие эмоции</li>
        <li>Главное{'\u00A0'}— это проздааная и{'\u00A0'}колеста</li>
      </ul>
      <figure className="photo photo--wide">
        <img src="/images/photo_3_2026-04-22_17-27-43.jpg" alt="Семья в парке в пастельных тонах" loading="lazy" />
      </figure>
    </article>
  );
}
