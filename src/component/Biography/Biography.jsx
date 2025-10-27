import css from "./Biography.module.scss";
import { BiographyContent } from "./BiographyContent";
import { BiographyImage } from "./BiographyImage";

export const Biography = () => {
    return(
        <section className={css.biography}>
            <div className={`container ${css.biography__container}`}>
              <BiographyContent />
              <BiographyImage />
            </div>
        </section>
    );
};
