import css from "./FooterLogo.module.scss";

export const FooterLogo = () => {
  return (
    <a className={css.footer__link} href="#">
      <svg width="224" height="46">
        <use href="/portfolio-castaway-html-scss-react-2025/icons.svg#icon-logo"></use>
      </svg>
    </a>
  );
};
