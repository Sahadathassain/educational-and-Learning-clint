import Banner from "../Banner/Banner";
import ImgGallery from "../ImgGallery/ImgGallery";
import TopUniversity from "../TopUniversity/TopUniversity";
import AllToys from "../Toys/AllToys/AllToys";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ImgGallery></ImgGallery>
            <AllToys></AllToys>
            <TopUniversity></TopUniversity>
        </div>
    );
};

export default Home;