import { SubscriptionContent } from "./SubscriptionContent";
import { SubscriptionForm } from "./SubscriptionForm";
import { SubscriptionIcon } from "./SubscriptionIcon";
import css from "./Subscription.module.scss";

export const Subscription = () => {
  return (
    <section className={css.subscription}>
      <div className={`container`}>
        <div className={css.subscription__container}>
          <SubscriptionContent />
          <SubscriptionForm />
          <SubscriptionIcon />
        </div>
      </div>
    </section>
  );
};
