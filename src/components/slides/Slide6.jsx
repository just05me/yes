import { publicImage } from '../../utils/publicImage.js';

export default function Slide6() {
  return (
    <article className="card card--6" aria-labelledby="s6-title">
      <h2 id="s6-title" className="oval">Просто будьте<br />вместе{'\u00A0'}♡</h2>
      <p className="big" style={{ fontSize: '19px' }}>
        Обнимайтесь, смейтесь,<br />
        смотрите друг на друга,<br />
        гуляйте, играйте.
      </p>
      <p className="big" style={{ fontSize: '19px' }}>
        Я буду рядом и{'\u00A0'}помогу<br />
        поймать ваши настящие<br />
        эмоции
      </p>
      <figure className="photo photo--taped photo--wide">
        <img src={publicImage('photo_7_2026-04-22_17-27-43.jpg')} alt="Семья обнимается в поле" loading="lazy" />
      </figure>
      <span className="heart" aria-hidden="true">♡</span>
    </article>
  );
}
