import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";
import { Episodes } from "./Episodes/Episodes";
import { Biography } from "./Biography/Biography";
import { Subscription } from "./Subscription/Subscription";
import { Reviews } from "./Reviews/Reviews";
import { Footer } from "./Footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Episodes />
        <Biography />
        <Subscription />
        <Reviews />
      </main>
      <Footer />
    </>
  );
};
