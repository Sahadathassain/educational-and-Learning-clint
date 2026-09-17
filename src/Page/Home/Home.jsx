import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ImgGallery from "../ImgGallery/ImgGallery";
import SpecialProducts from "../SpecialProducts/SpecialProducts";
import About from "../About/About";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <Banner />

      {/* Explore by subject */}
      <Category />

      {/* Learning collection */}
      <ImgGallery />

      {/* Special collection */}
      <SpecialProducts />

      {/* About the platform */}
      <About />

      {/* User feedback */}
      <Feedback />
    </main>
  );
};

export default Home;