import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiImage,
  FiInfo,
  FiPackage,
  FiStar,
  FiUser,
  FiMail,
  FiAlertCircle,
} from "react-icons/fi";

import { AuthContext } from "../../../Providers/AuthProvider";

const API_URL = "http://localhost:5000";

const initialFormData = {
  toyName: "",
  sellerName: "",
  sellerEmail: "",
  subCategory: "",
  price: "",
  toyRating: "",
  availableQuantity: "",
  toyPhoto: "",
  detailDescription: "",
};

const AddToys = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    ...initialFormData,
    sellerName: user?.displayName || "",
    sellerEmail: user?.email || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Automatically sync Firebase user information
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        sellerName: user.displayName || "",
        sellerEmail: user.email || "",
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    // User must be logged in
    if (!user?.email) {
      setErrorMessage(
        "You must be logged in to add a learning resource."
      );
      return;
    }

    // Make sure seller information always comes from Firebase
    const resourceData = {
      ...formData,
      sellerName: user.displayName || formData.sellerName || "User",
      sellerEmail: user.email,
      price: Number(formData.price),
      toyRating: Number(formData.toyRating),
      availableQuantity: Number(formData.availableQuantity),
      createdAt: new Date().toISOString(),
    };

    // Basic validation
    if (!resourceData.toyName.trim()) {
      setErrorMessage("Please enter a product name.");
      return;
    }

    if (!resourceData.subCategory) {
      setErrorMessage("Please select a category.");
      return;
    }

    if (resourceData.price < 0) {
      setErrorMessage("Price cannot be negative.");
      return;
    }

    if (resourceData.toyRating < 0 || resourceData.toyRating > 5) {
      setErrorMessage("Rating must be between 0 and 5.");
      return;
    }

    if (resourceData.availableQuantity < 0) {
      setErrorMessage("Available quantity cannot be negative.");
      return;
    }

    if (!resourceData.toyPhoto.trim()) {
      setErrorMessage("Please provide a product image URL.");
      return;
    }

    if (!resourceData.detailDescription.trim()) {
      setErrorMessage("Please provide a detailed description.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/Data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resourceData),
      });

      if (!response.ok) {
        let errorText = "Failed to add learning resource.";

        try {
          const errorData = await response.json();

          if (errorData?.message) {
            errorText = errorData.message;
          }
        } catch {
          // Ignore JSON parsing error
        }

        throw new Error(errorText);
      }

      const result = await response.json();

      console.log("Resource added:", result);

      setSuccessMessage(
        "Learning resource added successfully!"
      );

      // Reset form but keep logged-in seller information
      setFormData({
        ...initialFormData,
        sellerName: user.displayName || "",
        sellerEmail: user.email || "",
      });
    } catch (error) {
      console.error("Error adding resource:", error);

      setErrorMessage(
        error.message ||
          "Unable to add the resource. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* ==================================================
          PAGE HEADER
      ================================================== */}
      <section className="relative overflow-hidden bg-[#1E3A8A]">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
              <FiPackage size={13} />
              Resource Management
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Add a new
              <span className="block text-blue-200">
                learning resource.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Add educational products to your collection with the
              information learners need to make an informed choice.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          FORM SECTION
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* ==================================================
              FORM CARD
          ================================================== */}
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Card Heading */}
            <div className="mb-8 border-b border-[#E2E8F0] pb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                  <FiBookOpen size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#172033]">
                    Resource information
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-[#64748B]">
                    Fill in the details below to add your educational
                    resource.
                  </p>
                </div>
              </div>
            </div>

            {/* Success */}
            {successMessage && (
              <div
                className="mb-6 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4"
                role="status"
              >
                <FiCheckCircle
                  size={19}
                  className="mt-0.5 shrink-0 text-[#2563EB]"
                />

                <div>
                  <p className="text-sm font-semibold text-[#1E3A8A]">
                    Success
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    {successMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Error */}
            {errorMessage && (
              <div
                className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                role="alert"
              >
                <FiAlertCircle
                  size={19}
                  className="mt-0.5 shrink-0 text-red-600"
                />

                <div>
                  <p className="text-sm font-semibold text-red-700">
                    Something went wrong
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-600">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* ==================================================
                  BASIC INFORMATION
              ================================================== */}
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <FiInfo
                    size={17}
                    className="text-[#2563EB]"
                  />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172033]">
                    Basic Information
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {/* Product Name */}
                  <FormField
                    label="Product Name"
                    icon={<FiBookOpen size={16} />}
                    htmlFor="toyName"
                  >
                    <input
                      id="toyName"
                      type="text"
                      name="toyName"
                      placeholder="Enter product name"
                      value={formData.toyName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </FormField>

                  {/* Category */}
                  <FormField
                    label="Sub-category"
                    icon={<FiPackage size={16} />}
                    htmlFor="subCategory"
                  >
                    <select
                      id="subCategory"
                      name="subCategory"
                      value={formData.subCategory}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="">
                        Select a category
                      </option>

                      <option value="Math Toys">
                        Math Toys
                      </option>

                      <option value="Language Toys">
                        Language Toys
                      </option>

                      <option value="Science Toys">
                        Science Toys
                      </option>
                    </select>
                  </FormField>
                </div>
              </div>

              {/* ==================================================
                  SELLER INFORMATION
              ================================================== */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <FiUser
                    size={17}
                    className="text-[#2563EB]"
                  />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172033]">
                    Seller Information
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {/* Seller Name */}
                  <FormField
                    label="Seller Name"
                    icon={<FiUser size={16} />}
                    htmlFor="sellerName"
                  >
                    <input
                      id="sellerName"
                      type="text"
                      name="sellerName"
                      value={formData.sellerName}
                      className={`${inputClass} cursor-not-allowed bg-slate-100`}
                      readOnly
                      required
                    />
                  </FormField>

                  {/* Seller Email */}
                  <FormField
                    label="Seller Email"
                    icon={<FiMail size={16} />}
                    htmlFor="sellerEmail"
                  >
                    <input
                      id="sellerEmail"
                      type="email"
                      name="sellerEmail"
                      value={formData.sellerEmail}
                      className={`${inputClass} cursor-not-allowed bg-slate-100`}
                      readOnly
                      required
                    />
                  </FormField>
                </div>

                <div className="mt-3 rounded-xl bg-[#EFF6FF] px-4 py-3">
                  <p className="text-xs leading-5 text-[#1E3A8A]">
                    Seller information is automatically connected
                    to your currently logged-in account.
                  </p>
                </div>
              </div>

              {/* ==================================================
                  PRODUCT DETAILS
              ================================================== */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <FiPackage
                    size={17}
                    className="text-[#2563EB]"
                  />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172033]">
                    Product Details
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {/* Price */}
                  <FormField
                    label="Price"
                    htmlFor="price"
                  >
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#64748B]">
                        $
                      </span>

                      <input
                        id="price"
                        type="number"
                        name="price"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={handleChange}
                        className={`${inputClass} pl-9`}
                        required
                      />
                    </div>
                  </FormField>

                  {/* Rating */}
                  <FormField
                    label="Rating"
                    icon={<FiStar size={16} />}
                    htmlFor="toyRating"
                  >
                    <input
                      id="toyRating"
                      type="number"
                      name="toyRating"
                      min="0"
                      max="5"
                      step="0.1"
                      placeholder="0 - 5"
                      value={formData.toyRating}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </FormField>

                  {/* Quantity */}
                  <FormField
                    label="Available Quantity"
                    htmlFor="availableQuantity"
                  >
                    <input
                      id="availableQuantity"
                      type="number"
                      name="availableQuantity"
                      min="0"
                      step="1"
                      placeholder="0"
                      value={formData.availableQuantity}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </FormField>
                </div>
              </div>

              {/* ==================================================
                  IMAGE
              ================================================== */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <FiImage
                    size={17}
                    className="text-[#2563EB]"
                  />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172033]">
                    Product Image
                  </h3>
                </div>

                <FormField
                  label="Picture URL"
                  htmlFor="toyPhoto"
                >
                  <input
                    id="toyPhoto"
                    type="url"
                    name="toyPhoto"
                    placeholder="https://example.com/image.jpg"
                    value={formData.toyPhoto}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </FormField>

                {/* Preview */}
                {formData.toyPhoto && (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
                    <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-4 py-3">
                      <FiImage
                        size={15}
                        className="text-[#2563EB]"
                      />

                      <span className="text-xs font-semibold text-[#64748B]">
                        Image Preview
                      </span>
                    </div>

                    <div className="flex justify-center p-4">
                      <img
                        src={formData.toyPhoto}
                        alt="Product preview"
                        className="max-h-64 max-w-full rounded-xl object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display =
                            "none";
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ==================================================
                  DESCRIPTION
              ================================================== */}
              <div className="mt-10">
                <div className="mb-5 flex items-center gap-2">
                  <FiInfo
                    size={17}
                    className="text-[#2563EB]"
                  />

                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#172033]">
                    Description
                  </h3>
                </div>

                <FormField
                  label="Detailed Description"
                  htmlFor="detailDescription"
                >
                  <textarea
                    id="detailDescription"
                    name="detailDescription"
                    rows="6"
                    placeholder="Describe the product, its educational value, features, and what learners can expect..."
                    value={formData.detailDescription}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </FormField>
              </div>

              {/* ==================================================
                  SUBMIT
              ================================================== */}
              <div className="mt-10 border-t border-[#E2E8F0] pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !user}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8] hover:shadow-xl hover:shadow-[#2563EB]/25 focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Adding Resource...
                    </>
                  ) : (
                    <>
                      Add Learning Resource

                      <FiArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ==================================================
              SIDE INFORMATION
          ================================================== */}
          <aside className="h-fit rounded-3xl bg-[#1E3A8A] p-6 text-white shadow-lg lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <FiBookOpen size={22} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Add quality resources
            </h2>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Complete product information helps learners
              understand what they are getting before viewing
              the resource details.
            </p>

            <div className="mt-7 space-y-4">
              <InfoItem
                title="Clear product name"
                description="Use a simple and descriptive name."
              />

              <InfoItem
                title="Accurate information"
                description="Keep price, rating, and quantity up to date."
              />

              <InfoItem
                title="Useful description"
                description="Explain the educational value and key features."
              />

              <InfoItem
                title="Good image"
                description="Use a clear image URL for the resource."
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-xs leading-5 text-blue-100">
                Tip: Double-check your information before
                submitting the resource.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   REUSABLE FORM FIELD
============================================================ */

const FormField = ({
  label,
  icon,
  htmlFor,
  children,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-[#172033]"
      >
        {icon && (
          <span className="text-[#64748B]">
            {icon}
          </span>
        )}

        {label}
      </label>

      {children}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

/* ============================================================
   SIDEBAR INFO ITEM
============================================================ */

const InfoItem = ({ title, description }) => {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
        <FiCheckCircle size={14} />
      </div>

      <div>
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-blue-200">
          {description}
        </p>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

/* ============================================================
   INPUT STYLES
============================================================ */

const inputClass =
  "w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10";

const selectClass =
  "w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10";

export default AddToys;