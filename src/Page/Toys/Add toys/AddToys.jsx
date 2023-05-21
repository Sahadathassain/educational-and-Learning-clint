
const AddToys = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(newCoffee);

        // send data to the server
        // fetch('http://localhost:5000/coffee', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newCoffee)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if(data.insertedId){
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Coffee Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Cool'
        //               })
        //         }
        //     })
    }


    return (
        <div className="">
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Add a Information</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Student Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Student Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Admission Money </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Admission Money" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Student Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Student Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">University Rank</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="University Rank" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">University Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="University Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text"> University Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="University Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add a Information" className="btn btn-block" />

            </form>
        </div>
        </div>
    );
};

export default AddToys;