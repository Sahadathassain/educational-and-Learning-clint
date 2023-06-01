const About = () => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <h1 className="text-center text-3xl font-bold m-10">FROM OUR CUSTOMERS</h1>
            </div>
            <div>
                <div className="flex justify-end">
                    <img className="h-30 w-30 rounded-full mx-auto" src="https://img.lovepik.com/element/40044/3665.png_300.png" />

                </div>
                <div>
                    <h1 className="text-center m-10 text-xl font-bold">Dhaka/Bangladesh</h1>
                </div>
                <div className="">
                    <div className="rating mb-5 flex justify-center">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-sky-400" />
                    </div>

                    <div className="text-center px-10 mx-10">
                        <p>
                            How to write an exceptional 5-star review reply -Appbot
                            Thank you for taking the time to leave a 5-star review. Your feedback is greatly appreciated.

                            Thank you for the fantastic review! We put a lot of effort into making our product/service as user-friendly

                            and enjoyable as possible, so we are thrilled to hear that you are enjoying it.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
