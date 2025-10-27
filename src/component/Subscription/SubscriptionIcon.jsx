import css from "./SubscriptionIcon.module.scss";

export const SubscriptionIcon = () => {
  return (
    <svg className={css.subscription__icon} width="147" height="91">
      <use
        href="/portfolio-castaway-html-scss-react-2025/icons.svg#icon-subscription_icon"
        width="147"
        height="91"
      ></use>
    </svg>
  );
};
