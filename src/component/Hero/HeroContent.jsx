import { SocialList } from "./SocialList";
import css from "./HeroContent.module.scss";

const socialLinks = [
  { href: "#", alt: "spotify", icon: "icon_spotify" },
  { href: "#", alt: "pocket casts", icon: "icon_pocket_casts" },
  { href: "#", alt: "soundcloud", icon: "icon_soundcloud" },
  { href: "#", alt: "apple podcast", icon: "icon_apple_podcast" },
  { href: "#", alt: "icon overcast", icon: "icon_overcast" },
];

export const HeroContent = () => {
  return (
    <div className={css.hero__content_container}>
      <h1 className={css.hero__title}>
        Take your
        <br /> podcast to the
        <br />{" "}
        <span className={`${css.hero__title} ${css["hero__title--underline"]}`}>
          next
        </span>{" "}
        <span className={`${css.hero__title} ${css["hero__title--weight"]}`}>
          level
        </span>
      </h1>
      <p className={css.hero__description}>Listen on</p>
      <SocialList items={socialLinks} />
    </div>
  );
};
