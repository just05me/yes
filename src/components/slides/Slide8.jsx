export default function Slide8() {
  return (
    <article className="card card--8" aria-labelledby="s8-title">
      <h2 id="s8-title" className="title-sans title-underlined">Что взять с{'\u00A0'}собой</h2>
      <ul className="icon-list">
        <li><span className="ico" aria-hidden="true">🍶</span><span>Вода и{'\u00A0'}перекус</span></li>
        <li><span className="ico" aria-hidden="true">🧸</span><span>Любимая игрушка</span></li>
        <li><span className="ico" aria-hidden="true">🛏️</span><span>Плед</span></li>
        <li><span className="ico" aria-hidden="true">🧻</span><span>Влажные салфетки</span></li>
        <li><span className="ico" aria-hidden="true">👕</span><span>Сменная одежда<br /><em style={{ fontStyle: 'italic', color: 'var(--ink-soft)' }}>(для малышей)</em></span></li>
        <li><span className="ico" aria-hidden="true">🪮</span><span>Расчёска</span></li>
        <li><span className="ico" aria-hidden="true">🙂</span><span>Хорошее настроение</span></li>
      </ul>
    </article>
  );
}
