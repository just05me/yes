export default function Slide10() {
  return (
    <article className="card card--10" aria-labelledby="s10-title">
      <h2 id="s10-title" className="title-sans">Немного перед<br />встречей{'\u00A0'}♡</h2>
      <div className="contacts">
        <p className="line">
          Вашего фотографа зовут Алина.<br />
          Я{'\u00A0'}буду рада, если вы заранее<br />
          напишете имена всех участников<br />
          съёмки{'\u00A0'}— это поможет сделать наше<br />
          общение более тёплым и{'\u00A0'}личным.
        </p>
        <p className="line">
          При встрече мы обязательно ещё<br />
          раз познакомимся.
        </p>
        <p className="line">
          Я{'\u00A0'}буду рядом на{'\u00A0'}протяжении всей<br />
          съёмки и{'\u00A0'}помогу сделать процесс<br />
          максимально комфортным{'\u00A0'}♡
        </p>
        <p className="list list-title">Контакты:</p>
        <p className="list">@alina_photograph</p>
        <p className="list">@ +7 (999) 123-45-67</p>
      </div>
      <figure className="photo photo--taped photo--wide">
        <img src="/images/photo_10_2026-04-22_17-27-43.jpg" alt="Семья целует малыша" loading="lazy" />
      </figure>
    </article>
  );
}
