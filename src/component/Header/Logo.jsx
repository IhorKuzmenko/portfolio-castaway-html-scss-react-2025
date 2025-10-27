import css from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="#" className={css.header__link}>
      <svg className={css.header__icon}>
        <use href={`/portfolio-castaway-html-scss-react-2025/icons.svg#icon-logo`} width="160" height="33"></use>
      </svg>
    </a>
  );
};
