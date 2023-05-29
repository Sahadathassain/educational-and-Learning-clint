import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BsEyeFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showCount, setShowCount] = useState(2);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch toy data from the API endpoint
    setLoading(true);
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setShowCount(2); // Set the showCount state after toys are populated
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching toy data:", error);
        setLoading(false);
      });
    AOS.init();
  }, []);

  const subCategories = ["Math Toys", "Language Toys", "Science Toys"];

  const handleSeeAll = () => {
    setShowAll(true);
    setShowCount(toys.length);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setShowCount(2);
  };

  return (
    <Tabs>
      <h1 className="text-center font-extrabold text-4xl my-8">
      Learning Toys Collection
      </h1>
      <TabList className="text-center font-bold text-4xl border-y-2">
        {subCategories.map((subCategory) => (
          <Tab key={subCategory}>{subCategory}</Tab>
        ))}
      </TabList>

      {subCategories.map((subCategory) => (
        <TabPanel key={subCategory}>
          <h2 className="text-3xl text-center mt-5 font-bold mb-4">
            Toys in {subCategory}
          </h2>
          {loading ? (
            <div className="flex justify-center h-screen">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/023/549/926/small/doll-high-quality-logo-illustration-ideal-for-t-shirt-graphic-vector.jpg"
                alt="Loading..."
                className="w-16 h-16 rounded-full animate-spin"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {toys &&
                toys
                  .filter((toy) => toy.subCategory === subCategory)
                  .slice(0, showCount)
                  .map((filteredToy) => (
                    <div
                      key={filteredToy._id}
                      className="bg-white p-4 shadow rounded-lg"
                    >
                      <div className="aspect-w-3 h-96 relative">
                        <img
                          data-aos="flip-right"
                          src={filteredToy.toyPhoto}
                          alt={filteredToy.toyName}
                          className="h-full w-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="mt-4">
                        <h3
                          data-aos="fade-left"
                          className="text-xl text-center font-bold mb-2"
                        >
                          Toy Name:{" "}
                          {filteredToy.toyName.length > 25
                            ? filteredToy.toyName.slice(0, 25) + "..."
                            : filteredToy.toyName}
                        </h3>
                        <h2 data-aos="fade-up" className="ms-5">
                          Description:{" "}
                          {filteredToy.detailDescription.length > 80
                            ? filteredToy.detailDescription.slice(0, 80) + "..."
                            : filteredToy.detailDescription}
                        </h2>
                        <div className="flex mx-10 justify-between">
                          <p  data-aos="zoom-in-up" className="text-lg font-bold">
                            Price: ${filteredToy.price}
                          </p>
                          <p  data-aos="zoom-in-up" className="text-lg font-bold">
                            Available Quantity: {filteredToy.availableQuantity}
                          </p>
                          <div className="flex items-center text-lg font-bold mb-2">
                            <p  data-aos="zoom-in-up" className="">Rating: {filteredToy.toyRating}</p>
                            <AiFillStar className="text-yellow-500 mr-1" />
                          </div>
                        </div>
                        <Link 
                          data-aos="fade-"
                          to={`/viewdetails/${filteredToy._id}`}
                          className="btn btn-block text-xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                        >
                          <BsEyeFill className="mr-1" />
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          )}
          {!showAll ? (
            <button
              data-aos="flip-down"
              className="btn btn-block text-xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
              onClick={handleSeeAll}
            >
              See All
            </button>
          ) : (
            <button
              className="btn btn-block text-xl bg-gradient-to-r from-blue-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default Category;
