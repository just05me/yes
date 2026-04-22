import { publicImage } from '../../utils/publicImage.js';

export default function Slide7() {
  return (
    <article className="card card--7" aria-labelledby="s7-title">
      <h2 id="s7-title" className="title-sans">Детали, которые<br />оживляют кадр</h2>
      <p style={{ textAlign: 'center' }}><span className="pill">Базовое:</span></p>
      <p className="details-text">
        плед, корзинка, шляпа{'\u00A0'}/ панама,<br />
        любимая игрушка, книги.
      </p>
      <div className="detail-icons" aria-hidden="true">
        <span>📚</span><span>🌾</span><span>👒</span><span>🧸</span><span>🌿</span>
      </div>
      <p style={{ textAlign: 'center' }}><span className="pill">По желанию:</span></p>
      <p className="details-text">
        воздушные шары, мыльные<br />
        пузыри, фотоаппарат,<br />
        букет полевых цветов.
      </p>
      <figure className="photo photo--wide">
        <img src={publicImage('photo_8_2026-04-22_17-27-43.jpg')} alt="Семья на фоне холмов" loading="lazy" />
      </figure>
    </article>
  );
}
