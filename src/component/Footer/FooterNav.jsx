import css from "./FooterNav.module.scss";

export const FooterNav = () => {
  return (
    <>
      <ul className={css.footer__navigation_list}>
        {["Home", "Episodes", "About", "Contact"].map((item) => (
          <li key={item}>
            <a className={css.footer__navigation_link} href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul className={css.footer__navigation_list}>
        {[
          "Style Guide",
          "Instructions",
          "Changelog",
          "Credit",
          "Powered by Webflow",
          "Licenses",
        ].map((item) => (
          <li key={item}>
            <a
              className={`${css.footer__navigation_link} ${css["footer__navigation_link--size"]}`}
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
