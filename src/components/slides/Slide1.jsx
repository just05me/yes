import { publicImage } from '../../utils/publicImage.js';

export default function Slide1() {
  return (
    <article className="card card--1" aria-labelledby="s1-title">
      <figure className="photo photo--cover">
        <img src={publicImage('photo_2_2026-04-22_17-27-43.jpg')} alt="Мама с ребёнком в парке" loading="lazy" />
      </figure>
      <h2 id="s1-title" className="title-serif">
        Семейная<br />фотосессия<br />в парке
      </h2>
      <p className="subtitle">Памятка для подготовки</p>
      <p className="label-sans">Фотограф Алина</p>
    </article>
  );
}
