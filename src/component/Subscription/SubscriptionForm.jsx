import css from "./SubscriptionForm.module.scss";

export const SubscriptionForm = () => {
  return (
    <div className={css.subscription__container_form}>
      <form className={css.subscription__form}>
        <input
          className={css.subscription__input}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={css.subscription__input}
          type="text"
          name="email"
          placeholder="Email"
        />
        <button className={css.subscription__button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
