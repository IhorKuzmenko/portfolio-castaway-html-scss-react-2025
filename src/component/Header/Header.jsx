import css from "./Header.module.scss";
import { Logo } from "./Logo";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className = {css.header}>
      <div className={`container ${css.header__container}`}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
