import { FooterLogo } from "./FooterLogo";
import { FooterMedia } from "./FooterMedia";
import { FooterNav } from "./FooterNav";
import { SocialList } from "../Hero/SocialList";
import css from "./Footer.module.scss";

export const Footer = () => {
  const socialLinks = [
    { href: "#", alt: "spotify", icon: "icon_spotify" },
    { href: "#", alt: "pocket casts", icon: "icon_pocket_casts" },
    { href: "#", alt: "soundcloud", icon: "icon_soundcloud" },
    { href: "#", alt: "apple podcast", icon: "icon_apple_podcast" },
    { href: "#", alt: "overcast", icon: "icon_overcast" },
  ];

  return (
    <footer className={css.footer}>
      <div className={`container ${css.footer__container}`}>
        <div>
          <FooterLogo />
          <FooterMedia />
        </div>
        <div className={css.footer__container_nav}>
          <FooterNav />
          <div className={css.social_media__wrapper}>
            <SocialList items={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
};
