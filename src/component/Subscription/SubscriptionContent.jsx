import css from "./SubscriptionContent.module.scss";

export const SubscriptionContent = () => {
  return (
    <div>
      <p className={css.subscription__description}>Email Newsletter</p>
      <h2 className={css.subscription__title}>
        Subscribe
        <br /> for updates
      </h2>
    </div>
  );
};
