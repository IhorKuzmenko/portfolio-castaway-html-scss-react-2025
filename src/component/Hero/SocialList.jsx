import PropTypes from "prop-types";
import css from "./SocialList.module.scss";

export const SocialList = ({ items }) => {
  return (
    <ul className={css.social_media__list}>
      {items.map(({ href, icon, alt }, index) => (
        <li key={index}>
          <a
            className={`${css.social_media__link} ${css[icon]}`}
            href={href}
            aria-label={alt}
            target="_blank"
            rel="noreferrer"
          ></a>
        </li>
      ))}
    </ul>
  );
};

SocialList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
