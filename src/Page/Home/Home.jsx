import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feedback from "../Feedback/Feedback";
import ImgGallery from "../ImgGallery/ImgGallery";
import SpecialProducts from "../SpecialProducts/SpecialProducts";




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImgGallery></ImgGallery>
            <Category></Category>
            <SpecialProducts></SpecialProducts>
           <About></About>
           <Feedback></Feedback>
        </div>
    );
};

export default Home;