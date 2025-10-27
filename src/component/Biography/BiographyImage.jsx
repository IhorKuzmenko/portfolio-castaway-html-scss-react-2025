import css from "./BiographyImage.module.scss";
import biographyImage from "../../../assets/jacob_paulaner.jpg";

export const BiographyImage = () => {
  return (
    <div className={css.biography__container_image}>
      <img
        className={css.biography__image}
        src={biographyImage}
        alt="A man in a studio wearing headphones and speaking into a microphone."
      />
    </div>
  );
};
