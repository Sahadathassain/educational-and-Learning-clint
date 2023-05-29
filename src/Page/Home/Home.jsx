import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ImgGallery from "../ImgGallery/ImgGallery";
import TopUniversity from "../TopUniversity/TopUniversity";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImgGallery></ImgGallery>
            <Category></Category>
            <TopUniversity></TopUniversity>
        </div>
    );
};

export default Home;