import PropTypes from "prop-types";
import css from "./EpisodeCard.module.scss";

export const EpisodeCard = ({
  image,
  alt,
  category,
  number,
  title,
  description,
}) => {
  return (
    <>
      <li className={css.episodes__item}>
        <div className={css.episodes_container__item}>
          <img className={css.episodes__image} src={image} alt={alt} />
        </div>
        <div className={css.episodes_container__content}>
          <a className={css.episodes_container__link} href="#">
            {category}
          </a>
          <p className={css.episodes_container__name}>
            Episode{" "}
            <span className={css["episodes_container__name--size"]}>
              {number}
            </span>
          </p>
          <h3
            className={css.episodes_container__title}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          <p
            className={css.episodes_container__description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <button className={css.episodes_container__button} type="button">
            View Episode Details
          </button>
        </div>
      </li>
    </>
  );
};

EpisodeCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
