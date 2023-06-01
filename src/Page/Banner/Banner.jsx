const Banner = () => {
    return (
      <div>
        <div className=" bg-sky-400">
          <div className="hero-content flex-col lg:flex-row items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/546/156/original/e-learning-and-distance-education-banner-template-with-tiny-people-characters-among-books-educational-internet-computer-courses-and-online-schooling-internet-technology-illustration-free-vector.jpg"
              className="h-100 w-full lg:w-1/2 rounded-lg shadow-2xl mb-6 lg:mb-0"
              alt="Banner"
            />
            <div className="lg:ml-6">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                All Categories of Education
              </h1>
              <p className="text-lg lg:text-xl py-2 lg:py-6">
                Science Education, Mathematics Education, Language Arts Education,
                Social Studies Education, Physical Education, Fine Arts Education,
                Special Needs Education, Career and Technical Education (CTE),
                Global Education, etc.
              </p>
              <p className="text-lg lg:text-xl py-2">
                These categories provide a glimpse into the diverse areas of
                education, each with its own objectives, approaches, and
                curriculum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  