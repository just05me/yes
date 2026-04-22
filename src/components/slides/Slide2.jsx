export default function Slide2() {
  return (
    <article className="card card--2" aria-labelledby="s2-title">
      <h2 id="s2-title" className="big">Эта съёмка —<br />не про позирование</h2>
      <p className="big">
        используют<br />
        <span className="hl">ваши эмоции</span><br />
        <span className="hl">и моменты</span>
      </p>
      <p className="big">Это про вас...</p>
      <span className="heart" aria-hidden="true">♡</span>
      <p className="note">
        Я подготовила небольшую памятку,<br />
        и{'\u00A0'}подготовила нсей совкеки и{'\u00A0'}помогу<br />
        сделать процесс звес максимально<br />
        комфортным.
      </p>
    </article>
  );
}
