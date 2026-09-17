import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

import {
  FiX,
  FiDollarSign,
  FiStar,
  FiPackage,
  FiSave,
  FiLoader,
} from "react-icons/fi";

const UpdateToy = ({ toy, onClose, onUpdate }) => {
  const [updatedToyData, setUpdatedToyData] = useState({
    price: Number(toy.price),
    toyRating:
      toy.toyRating !== null && toy.toyRating !== undefined
        ? Number(toy.toyRating)
        : "",
    availableQuantity: Number(toy.availableQuantity),
  });

  const [isUpdating, setIsUpdating] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUpdatedToyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const price = Number(updatedToyData.price);
    const toyRating = Number(updatedToyData.toyRating);
    const availableQuantity = Number(updatedToyData.availableQuantity);

    // Basic validation
    if (price < 0) {
      toast.error("Price cannot be negative.");
      return;
    }

    if (toyRating < 0 || toyRating > 5) {
      toast.error("Rating must be between 0 and 5.");
      return;
    }

    if (availableQuantity < 0) {
      toast.error("Quantity cannot be negative.");
      return;
    }

    const finalData = {
      price,
      toyRating,
      availableQuantity,
    };

    try {
      setIsUpdating(true);

      await onUpdate(finalData);

      toast.success("Toy updated successfully!");

      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error) {
      toast.error("Failed to update toy.");
      console.error("Failed to update toy:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#172033]/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#F97316]" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Manage Learning Item
            </p>

            <h2 className="text-2xl font-bold text-[#172033]">
              Update Toy
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Update the price, rating, or available quantity.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isUpdating}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] text-[#64748B] transition hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#172033] disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close update modal"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-5">
            {/* Price */}
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-semibold text-[#172033]"
              >
                Price
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#64748B]">
                  <FiDollarSign size={18} />
                </div>

                <input
                  id="price"
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={updatedToyData.price}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  placeholder="Enter price"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="toyRating"
                className="mb-2 block text-sm font-semibold text-[#172033]"
              >
                Rating
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#F97316]">
                  <FiStar size={18} />
                </div>

                <input
                  id="toyRating"
                  type="number"
                  name="toyRating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={updatedToyData.toyRating}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  placeholder="0 - 5"
                />
              </div>

              <p className="mt-1.5 text-xs text-[#64748B]">
                Enter a rating between 0 and 5.
              </p>
            </div>

            {/* Quantity */}
            <div>
              <label
                htmlFor="availableQuantity"
                className="mb-2 block text-sm font-semibold text-[#172033]"
              >
                Available Quantity
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#2563EB]">
                  <FiPackage size={18} />
                </div>

                <input
                  id="availableQuantity"
                  type="number"
                  name="availableQuantity"
                  min="0"
                  step="1"
                  value={updatedToyData.availableQuantity}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-11 pr-4 text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  placeholder="Enter quantity"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isUpdating}
              className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#172033] transition hover:bg-[#F8FAFC] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isUpdating}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isUpdating ? (
                <>
                  <FiLoader className="animate-spin" size={17} />
                  Updating...
                </>
              ) : (
                <>
                  <FiSave size={17} />
                  Update Toy
                </>
              )}
            </button>
          </div>
        </form>

        {/* Toast */}
        <ToastContainer
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </div>
    </div>
  );
};

UpdateToy.propTypes = {
  toy: PropTypes.shape({
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    toyRating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    availableQuantity: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateToy;