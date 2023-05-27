import { useState } from 'react';

const AddToys = () => {
    const [formData, setFormData] = useState({
        toyName: '',
        sellerName: '',
        sellerEmail: '',
        subCategory: '',
        price: '',
        toyRating: '',
        availableQuantity: '',
        toyPhoto: '',
        detailDescription: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the form data here
        fetch(`http://localhost:5000/information`, {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        console.log(formData);
        // Reset the form fields
        setFormData({
            toyName: '',
            sellerName: '',
            sellerEmail: '',
            subCategory: '',
            price: '',
            toyRating: '',
            availableQuantity: '',
            toyPhoto: '',
            detailDescription: ''
        });
    };

    return (
        <div className="">
            <div className="bg-[#F4F3F0] p-8 md:p-16 lg:p-24">
                <h2 className="text-3xl font-extrabold text-center mb-8 lg:mb-10">Add Information</h2>
                <form onSubmit={handleSubmit}>
                    {/* form name and quantity row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="toyName"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full"
                                    value={formData.toyName}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="sellerName"
                                    placeholder="Seller Name"
                                    className="input input-bordered w-full"
                                    value={formData.sellerName}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="sellerEmail"
                                    placeholder="Seller Email"
                                    className="input input-bordered w-full"
                                    value={formData.sellerEmail}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <label className="select select-bordered w-full">
                                <select
                                    name="subCategory"
                                    className="select-input"
                                    value={formData.subCategory}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Sub-category</option>
                                    <option value="Math Toys">Math Toys</option>
                                    <option value="Language Toys">Language Toys</option>
                                    <option value="Science Toys">Science Toys</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="toyRating"
                                    placeholder="Rating"
                                    className="input input-bordered w-full"
                                    value={formData.toyRating}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="availableQuantity"
                                    placeholder="Available Quantity"
                                    className="input input-bordered w-full"
                                    value={formData.availableQuantity}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="toyPhoto"
                                placeholder="Picture URL of the toy"
                                className="input input-bordered w-full"
                                value={formData.toyPhoto}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                name="detailDescription"
                                placeholder="Detail Description"
                                className="textarea textarea-bordered w-full"
                                value={formData.detailDescription}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Add Information" className="btn btn-block mt-8" />
                </form>
            </div>
        </div>
    );
};

export default AddToys;
