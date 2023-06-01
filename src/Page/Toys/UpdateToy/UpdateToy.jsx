import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const UpdateToy = ({ toy, onClose, onUpdate }) => {
  const [updatedToyData, setUpdatedToyData] = useState({
    price: Number(toy.price),
    rating: toy.toyRating !== null ? parseInt(toy.toyRating) : null,
    availableQuantity: Number(toy.availableQuantity),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(updatedToyData)
      .then(() => {
        onClose();
        toast.success('Toy updated successfully');
      })
      .catch((error) => {
        toast.error('Failed to update toy');
        console.error('Failed to update toy:', error);
      });
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="bg-white w-full md:w-1/2 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Update Toy</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Price:
            <input
              type="number"
              name="price"
              value={updatedToyData.price}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Rating:
            <input
              type="number"
              name="toyRating"
              
              value={updatedToyData.toyRating}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <label className="block mb-2">
            Available Quantity:
            <input
              type="number"
              name="availableQuantity"
              value={updatedToyData.availableQuantity}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

UpdateToy.propTypes = {
  toy: PropTypes.shape({
    price: PropTypes.number.isRequired,
    toyRating: PropTypes.number.isRequired,
    availableQuantity: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateToy;
