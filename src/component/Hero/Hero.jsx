import { HeroImage } from "./HeroImage";
import { HeroContent } from "./HeroContent";
import css from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={`container ${css.hero__container}`}>
        <HeroImage />
        <HeroContent />
      </div>
    </section>
  );
};
