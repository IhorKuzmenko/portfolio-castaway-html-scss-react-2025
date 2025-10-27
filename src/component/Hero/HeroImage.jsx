import css from "./HeroImage.module.scss";
import heroImage from "../../../assets/hero_image.jpg";

export const HeroImage = () => {
  return (
    <div className={css.hero__image_container}>
      <img
        className={css.hero__image}
        src={heroImage}
        alt="A man in a studio wearing headphones and speaking into a microphone."
      />
      <svg className={css.hero__icon} width="68" height="74">
        <use href={`/portfolio-castaway-html-scss-react-2025/icons.svg#icon-hero_icon`} width="68" height="74"></use>
      </svg>
    </div>
  );
};
