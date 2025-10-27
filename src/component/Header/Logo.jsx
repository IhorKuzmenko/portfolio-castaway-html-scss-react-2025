import css from "./Logo.module.scss";
import logo from "../../../assets/icons.svg";

export const Logo = () => {
  return (
    <a href="#" className={css.header__link}>
      <svg className={css.header__icon}>
        <use href={`${logo}#icon-logo`} width="160" height="33"></use>
      </svg>
    </a>
  );
};
