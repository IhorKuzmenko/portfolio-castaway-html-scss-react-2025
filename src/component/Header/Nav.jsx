import css from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav__list}>
        <li>
          <a className={css.nav__link} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={css.nav__link} href="#">
            Episodes
          </a>
        </li>
        <li>
          <a className={css.nav__link} href="#">
            About
          </a>
        </li>
        <li>
          <a className={css.nav__link} href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
