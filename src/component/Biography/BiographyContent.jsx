import css from "./BiographyContent.module.scss";

export const BiographyContent = () => {
  return (
    <div className={css.biography_container_content}>
      <button className={css.biography__button} type="button"></button>
      <p className={css.biography__text}>Meet your host</p>
      <h2 className={css.biography__title}>Jacob Paulaner</h2>
      <p
        className={`${css.biography__description} ${css["biography__description--position"]}`}
      >
        Jacob has a background in audio engineering, and has
        <br /> been podcasting since the early days.
      </p>
      <p className={css.biography__description}>
        He’s here to help you level up your game by sharing
        <br /> everything he’s learned along the way.
      </p>
    </div>
  );
};
