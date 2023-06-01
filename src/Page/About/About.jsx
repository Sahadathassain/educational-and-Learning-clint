const About = () => {
    return (
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-center text-4xl font-bold m-10">FROM OUR CUSTOMERS</h1>
        </div>
        <div className=" border-solid border-2 rounded-md border-sky-200 shadow-md m-5">
          <div className="flex justify-center">
            <img className="h-30 w-30 rounded-full mx-auto mt-10" src="https://img.lovepik.com/element/40044/3665.png_300.png" />
          </div>
          <div>
            <h1 className="text-center m-10 text-xl ">Sahadat Hossain</h1>
          </div>
          <div>
            <h1 className="text-center m-10 text-xl font-bold">Dhaka/Bangladesh</h1>
          </div>
          <div className="">
            <div className="rating mb-5 flex justify-center">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-500" />
            </div>
            <div className="text-center m-20 px-4 md:px-10"> {/* Reduce horizontal padding on small screens */}
              <p>
                How to write an exceptional 5-star review reply -Appbot
                Thank you for taking the time to leave a 5-star review. Your feedback is greatly appreciated.
  
                Thank you for the fantastic review! We put a lot of effort into making our product/service as user-friendly and enjoyable as possible, so we are thrilled to hear that you are enjoying it.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  