

const TopUniversity = () => {
    return (


        <div>
            <div>
                <h1 className="text-center font-bold text-4xl p-5">Top Rank University of world </h1>
            </div>
            <div className="flex p-7 gap-5 bg-slate-300">

                <div className="card w-96 glass">
                    <figure><img src="https://media.istockphoto.com/id/1268371897/photo/massachusetts-institute-of-technology-mit-great-dome-and-killian-court.jpg?s=1024x1024&w=is&k=20&c=hrb4lWzHcCQwMlghY2EXzIXkUSxC1PNH6E4zM57JLR0=" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Massachusetts Institute of Technology (MIT)</h2>
                        <p> MIT is perhaps best known for its programs in engineering and the physical sciences, other areas—notably economics, political science, urban studies, linguistics, and philosophy—are also strong</p>
                        <p className="font-bold" >World Rank : 01</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary relative">University Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img className="h-50 w-45" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/92/84.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold mb-6">	University of Cambridge</h2>
                        <p>academic excellence and traditional scholarly values, the University of Cambridge often ranks among the very top universities in the world for teaching, research, and international outlook.</p>
                        <p className="font-bold" >World Rank : 02</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary relative">University Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 glass">
                    <figure><img src="https://images.shiksha.com/mediadata/images/1533535408phpqBtlZX.jpeg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold mb-4">	Stanford University</h2>
                        <p>The most common reason for a low acceptance rate is a combination of high academic standards and popularity among prospective students</p>
                        <p className="font-bold mt-6" >World Rank : 03</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary relative">University Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopUniversity;