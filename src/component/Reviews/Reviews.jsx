import css from "./Reviews.module.scss";

const reviewsData = [
  {
    text: "I can’t recommend<br> this podcast<br> enough",
    name: "Betty Lacey",
  },
  {
    text: "Jacob is the best<br> in the business",
    name: "Adam Driver",
  },
  {
    text: "A wealth of audio knowledge",
    name: "Marcus Brown",
  },
  {
    text: "Every episode is a gem!",
    name: "Jessica Knowl",
  },
  {
    text: "Whoa whoa, let me take some notes!",
    name: "Scott Adams",
  },
  {
    text: "I’ve upped my game considerably since I started listening",
    name: "Steven Blast",
  },
];

export const Reviews = () => {
  return (
    <section className={css.reviews}>
      <div className={`container`}>
        <div className={css.reviews__container}>
        <ul className={css.reviews__list}>
          {reviewsData.map(({ text, name }, index) => (
            <li key={index} className={css.reviews__link}>
              <ul className={css.stars__list}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <li key={i}>
                    <svg width="18" height="17">
                      <use href="/portfolio-castaway-html-scss-react-2025/icons.svg#icon-star"></use>
                    </svg>
                  </li>
                ))}
              </ul>
              <p className={css.reviews__text} dangerouslySetInnerHTML={{ __html: text }}></p>
               <p className={css.reviews__name}>{name}</p>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
};
