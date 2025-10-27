import { EpisodeCard } from "./EpisodeCard";
import css from "./Episodes.module.scss";
import episodeImage1 from "../../../assets/episode_1.jpg";
import episodeImage2 from "../../../assets/episode_2.jpg";
import episodeImage3 from "../../../assets/episode_3.jpg";

const cards = [
  {
    image: episodeImage1,
    alt: "Mixing console",
    category: "Gear",
    number: 3,
    title: "Should you get<br /> outboard audio gear?",
    description:
      "Is hardware really worth it when it comes to podcasting? The answer is...it<br /> depends. Here’s our reasons on why you might want to consider picking<br /> something up.",
  },
  {
    image: episodeImage2,
    alt: "Microphone",
    category: "Tips & Tricks",
    number: 2,
    title: " Mic tricks to take<br /> you to the next level",
    description:
      " Stop rolling with those default settings on your mic. These small tweaks will <br /> take you from sounding good to great.",
  },
  {
    image: episodeImage3,
    alt: "Man with microphone",
    category: "Gear",
    number: 1,
    title: " The best microphone<br /> under $200",
    description:
      " With so many microphones on the market, how are you supposed to know<br /> what’s the best? Take a look at our top picks.",
  },
];

export const Episodes = () => {
  return (
    <section className={css.episodes}>
      <div className={`container ${css.episodes__container}`}>
        <div className={css.episodes__container_position}>
          <h2 className={css.episodes__title}>Latest episodes</h2>
          <button className={css.episodes__button} type="button">
            View all episodes
          </button>
        </div>
        <ul className={css.episodes__list}>
          {cards.map((card, index) => (
            <EpisodeCard key={index} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
};
