

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-sky-400">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://static.vecteezy.com/system/resources/previews/016/546/156/original/e-learning-and-distance-education-banner-template-with-tiny-people-characters-among-books-educational-internet-computer-courses-and-online-schooling-internet-technology-illustration-free-vector.jpg" className=" h-100 w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">All Category of Education </h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;