import { publicImage } from '../../utils/publicImage.js';

export default function Slide5() {
  return (
    <article className="card card--5" aria-labelledby="s5-title">
      <h2 id="s5-title" className="title-sans">Когда ребёнку комфортно{'\u00A0'}—<br />получаются</h2>
      <p className="title-sans">
        <span className="hl">Самые живые кадры</span>
      </p>
      <ul className="icon-list">
        <li><span className="ico" aria-hidden="true">🦴</span><span>Удобная одежда по погоде</span></li>
        <li><span className="ico" aria-hidden="true">🧸</span><span>Любимая игрушка или плед</span></li>
        <li><span className="ico" aria-hidden="true">🍼</span><span>Перекус и{'\u00A0'}вода</span></li>
        <li><span className="ico" aria-hidden="true">🙂</span><span>Хорошее настроение</span></li>
      </ul>
      <div className="photo-pair">
        <figure className="photo photo--taped">
          <img src={publicImage('photo_5_2026-04-22_17-27-43.jpg')} alt="Папа с ребёнком в траве" loading="lazy" />
        </figure>
        <figure className="photo photo--taped">
          <img src={publicImage('photo_6_2026-04-22_17-27-43.jpg')} alt="Семья держится за руки в поле" loading="lazy" />
        </figure>
      </div>
    </article>
  );
}
