export default function Slide9() {
  return (
    <article className="card card--9" aria-labelledby="s9-title">
      <h2 id="s9-title" className="big" style={{ fontStyle: 'italic' }}>Самые ценные кадры{'\u00A0'}—</h2>
      <p className="big">
        это <span className="hl">не идеальные позы,</span><br />
        <span className="hl">настоящие эмоции</span>
      </p>
      <span className="heart" aria-hidden="true">♡</span>
      <figure className="photo photo--taped photo--wide">
        <img src="/images/photo_9_2026-04-22_17-27-43.jpg" alt="Пара целуется в поле" loading="lazy" />
      </figure>
    </article>
  );
}
