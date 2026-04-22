import { SwipeSlider } from './components/SwipeSlider';

const base = import.meta.env.BASE_URL;

const img = (n) => `${base}images/photo_${n}_2026-04-22_17-27-43.jpg`;

export default function App() {
  return (
    <>
      <h1 className="sr">Памятка для подготовки к семейной фотосессии — фотограф Алина</h1>
      <SwipeSlider>
        {/* 1 — обложка: овал, подзаголовок, две фото */}
        <article className="card">
          <div className="oval-ttl s1-oval" id="s1">
            Семейная
            <br />
            фотосессия
            <br />в парке
          </div>
          <p className="subtitle">Памятка для подготовки</p>
          <p className="caps-label">фотограф алина</p>
          <div className="s1-photos">
            <figure className="photo ph-tall">
              <img src={img(2)} alt="Мама с ребёнком в парке" loading="lazy" />
            </figure>
            <div className="ph-strip">
              <figure className="photo ph-tall ph-tape ph-tape-sm">
                <img src={img(11)} alt="" loading="lazy" />
              </figure>
              <figure className="photo ph-tall ph-tape ph-tape-sm">
                <img src={img(3)} alt="" loading="lazy" />
              </figure>
            </div>
          </div>
        </article>

        {/* 2 */}
        <article className="card">
          <h2 className="lead" id="s2" style={{ fontWeight: 500 }}>
            Эта съёмка —<br />
            не про позирование
          </h2>
          <p className="lead">
            используют<br />
            <span className="hl">ваши эмоции</span> <br />
            <span className="hl">и моменты</span>
          </p>
          <p className="lead">Это про вас…</p>
          <span className="heart" aria-hidden>
            ♡
          </span>
          <p className="note">
            Я подготовила эту памятку, чтобы сделать процесс для вас
            <br />
            максимально комфортным.
          </p>
        </article>

        {/* 3 — одежда */}
        <article className="card">
          <h2 className="sans-ttl" id="s3">
            одежда — это
          </h2>
          <p className="p80">
            <span className="big-num">80</span>
            <span className="rest">% успеха</span>
          </p>
          <ul className="bullets">
            <li>Выбирайте спокойные, согласованные по гамме образы</li>
            <li>Избегайте крупных логотипов и «кричащих» принтов</li>
            <li>Одежда должна подчёркивать ваши настоящие эмоции</li>
            <li>Главное — удобство, свободное движение, погода</li>
          </ul>
          <figure className="photo ph-wide">
            <img src={img(3)} alt="Семья в парке" loading="lazy" />
          </figure>
        </article>

        {/* 4 — комфорт, список */}
        <article className="card">
          <h2 className="sans-ttl" id="s4">
            Когда ребёнку
            <br />
            комфортно — получаются
          </h2>
          <p className="sans-ttl" style={{ margin: '-2px 0 2px' }}>
            <span className="hl hl--small">самые живые кадры</span>
          </p>
          <ul className="bullets">
            <li>Удобная одежда по погоде</li>
            <li>Любимая игрушка или плед</li>
            <li>Перекус и вода</li>
            <li>Хорошее настроение</li>
          </ul>
          <figure className="photo ph-wide">
            <img src={img(4)} alt="Семья на прогулке" loading="lazy" />
          </figure>
        </article>

        {/* 5 — иконки + две фото */}
        <article className="card">
          <h2 className="sans-ttl" id="s5">
            Когда ребёнку комфортно —<br />
            получаются
          </h2>
          <p className="sans-ttl" style={{ margin: '0 0 2px' }}>
            <span className="hl hl--small">самые живые кадры</span>
          </p>
          <ul className="icon-list">
            <li>
              <span className="ico" aria-hidden>
                👕
              </span>
              <span>Удобная одежда по погоде</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🧸
              </span>
              <span>Любимая игрушка или плед</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🍼
              </span>
              <span>Перекус и вода</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🙂
              </span>
              <span>Хорошее настроение</span>
            </li>
          </ul>
          <div className="pair">
            <figure className="photo ph-tall ph-tape">
              <img src={img(5)} alt="" loading="lazy" />
            </figure>
            <figure className="photo ph-tall ph-tape">
              <img src={img(6)} alt="" loading="lazy" />
            </figure>
          </div>
        </article>

        {/* 6 — вместе */}
        <article className="card">
          <h2 className="oval-ttl" id="s6">
            просто будьте
            <br />
            вместе ♡
          </h2>
          <p className="lead" style={{ fontSize: '0.95rem' }}>
            Обнимайтесь, смейтесь,
            <br />
            смотрите друг на друга, гуляйте, играйте.
          </p>
          <p className="lead" style={{ fontSize: '0.95rem' }}>
            Я буду рядом и помогу поймать ваши настоящие эмоции
          </p>
          <figure className="photo ph-wide ph-tape" style={{ marginTop: 6 }}>
            <img src={img(7)} alt="Семья" loading="lazy" />
          </figure>
          <span className="heart" aria-hidden>
            ♡
          </span>
        </article>

        {/* 7 — детали */}
        <article className="card">
          <h2 className="sans-ttl" id="s7">
            Детали, которые
            <br />
            оживляют кадр
          </h2>
          <p className="sans-ttl" style={{ margin: '0 0 2px' }}>
            <span className="pill">базовое:</span>
          </p>
          <p className="details-txt">плед, корзинка, шляпа / панама, любимая игрушка, книги.</p>
          <div className="detail-icons" aria-hidden>
            <span>📚</span>
            <span>🧺</span>
            <span>👒</span>
            <span>🧸</span>
            <span>🎈</span>
          </div>
          <p className="sans-ttl" style={{ margin: '2px 0' }}>
            <span className="pill">по желанию:</span>
          </p>
          <p className="details-txt">воздушные шары, мыльные пузыри, букет цветов.</p>
          <figure className="photo ph-wide" style={{ marginTop: 4 }}>
            <img src={img(8)} alt="" loading="lazy" />
          </figure>
        </article>

        {/* 8 — что взять */}
        <article className="card">
          <h2 className="title-under" id="s8">
            что взять с собой
          </h2>
          <ul className="icon-list">
            <li>
              <span className="ico" aria-hidden>
                🍶
              </span>
              <span>Вода и перекус</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🧸
              </span>
              <span>Любимая игрушка</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🧣
              </span>
              <span>Плед</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🧻
              </span>
              <span>Влажные салфетки</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                👕
              </span>
              <span>
                Сменная одежда <em style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>(для малышей)</em>
              </span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                ✨
              </span>
              <span>Расчёска</span>
            </li>
            <li>
              <span className="ico" aria-hidden>
                🙂
              </span>
              <span>Хорошее настроение</span>
            </li>
          </ul>
        </article>

        {/* 9 — ценные кадры */}
        <article className="card">
          <h2 className="lead" id="s9" style={{ fontStyle: 'italic' }}>
            Самые ценные кадры —
          </h2>
          <p className="lead">
            это <span className="hl">не идеальные позы,</span>
            <br />
            <span className="hl">а настоящие эмоции</span>
          </p>
          <span className="heart" aria-hidden>
            ♡
          </span>
          <figure className="photo ph-wide ph-tape" style={{ marginTop: 4 }}>
            <img src={img(9)} alt="" loading="lazy" />
          </figure>
        </article>

        {/* 10 — контакты */}
        <article className="card">
          <h2 className="sans-ttl" id="s10">
            немного перед
            <br />
            встречей ♡
          </h2>
          <div className="contacts">
            <p className="line">
              Вашего фотографа зовут Алина. Буду рада, если вы заранее напишите имена всех участников съёмки — так наше
              общение станет теплее и личнее.
            </p>
            <p className="line">При встрече мы ещё раз познакомимся и всё обсудим.</p>
            <p className="line">Я буду рядом на протяжении съёмки и помогу вам чувствовать себя максимально комфортно ♡</p>
            <p className="list list-title">контакты</p>
            <div className="contact-icon-row">
              <p className="list contact-row">
                <span className="thumb-ico" aria-hidden>
                  📷
                </span>
                @alina_photograph
              </p>
              <p className="list contact-row">
                <span className="thumb-ico" aria-hidden>
                  📞
                </span>
                +7 (999) 123-45-67
              </p>
            </div>
          </div>
          <div className="pair" style={{ marginTop: 8, gridTemplateColumns: '1fr 1fr 1fr' }}>
            <figure className="photo ph-tall ph-tape" style={{ gridColumn: 'span 1' }}>
              <img src={img(10)} alt="" />
            </figure>
            <figure className="photo ph-tall ph-tape" style={{ gridColumn: 'span 1' }}>
              <img src={img(12)} alt="" />
            </figure>
            <figure className="photo ph-tall ph-tape" style={{ gridColumn: 'span 1' }}>
              <img src={img(11)} alt="" />
            </figure>
          </div>
        </article>
      </SwipeSlider>
    </>
  );
}
