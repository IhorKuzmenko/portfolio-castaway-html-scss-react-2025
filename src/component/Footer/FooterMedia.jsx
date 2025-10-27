import css from "./FooterMedia.module.scss";

export const FooterMedia = () => {
  return (
    <ul className={css.footer_media__list}>
      {["instagram", "twitter", "facebook"].map((icon) => (
        <li key={icon}>
          <a href="#">
            <svg width="24" height="24">
              <use href={`/portfolio-castaway-html-scss-react-2025/icons.svg#icon-${icon}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};
