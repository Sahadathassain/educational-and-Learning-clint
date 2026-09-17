import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillStar,
} from "react-icons/ai";
import {
  BsArrowRight,
  BsEyeFill,
} from "react-icons/bs";
import {
  FiBookOpen,
  FiChevronDown,
  FiChevronUp,
  FiRefreshCw,
} from "react-icons/fi";

const API_URL = "https://educational-and-learning-server.vercel.app";

const Category = () => {
  const [toys, setToys] = useState([]);

  const [activeCategory, setActiveCategory] =
    useState("Math Toys");

  const [showAll, setShowAll] = useState(false);

  const [loading, setLoading] = useState(true);

  const [errorMessage, setErrorMessage] =
    useState("");

  // =====================================================
  // CATEGORIES
  // =====================================================

  const subCategories = [
    "Math Toys",
    "Language Toys",
    "Science Toys",
  ];

  // =====================================================
  // FETCH DATA
  // =====================================================

  useEffect(() => {
    const fetchToys = async () => {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await fetch(
          `${API_URL}/allData`
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch learning resources."
          );
        }

        const data = await response.json();

        setToys(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(
          "Error fetching toy data:",
          error
        );

        setErrorMessage(
          "Unable to load learning resources. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchToys();
  }, []);

  // =====================================================
  // FILTER
  // =====================================================

  const filteredToys = toys.filter(
    (toy) =>
      toy.subCategory === activeCategory
  );

  // =====================================================
  // VISIBLE ITEMS
  // =====================================================

  const visibleToys = showAll
    ? filteredToys
    : filteredToys.slice(0, 2);

  // =====================================================
  // CATEGORY CHANGE
  // =====================================================

  const handleCategoryChange = (
    category
  ) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  // =====================================================
  // RETRY
  // =====================================================

  const handleRetry = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch(
        `${API_URL}/allData`
      );

      if (!response.ok) {
        throw new Error(
          "Failed to fetch learning resources."
        );
      }

      const data = await response.json();

      setToys(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(
        "Error fetching toy data:",
        error
      );

      setErrorMessage(
        "Unable to load learning resources. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto max-w-3xl text-center">

          {/* Label */}

          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1E6] text-[#F97316]">
              <FiBookOpen size={15} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              Explore Learning
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl lg:text-5xl">
            Learn through{" "}
            <span className="text-[#2563EB]">
              play & discovery
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#64748B] sm:text-lg">
            Explore educational resources that
            make learning more interactive,
            creative, and enjoyable.
          </p>
        </div>

        {/* =================================================
            CATEGORY NAVIGATION
        ================================================= */}

        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-xl flex-wrap justify-center gap-2 rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-sm">
            {subCategories.map(
              (category) => {
                const isActive =
                  activeCategory ===
                  category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      handleCategoryChange(
                        category
                      )
                    }
                    className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 sm:px-5 ${
                      isActive
                        ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20"
                        : "text-[#64748B] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
                    }`}
                  >
                    {category}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* =================================================
            CATEGORY HEADER
        ================================================= */}

        <div className="mt-12 flex items-end justify-between gap-4 border-b border-[#E2E8F0] pb-5">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#F97316]">
              Featured Collection
            </p>

            <h3 className="mt-1 text-2xl font-extrabold text-[#172033] sm:text-3xl">
              {activeCategory}
            </h3>
          </div>

          {!loading &&
            !errorMessage && (
              <div className="hidden rounded-full bg-[#EFF6FF] px-3 py-1.5 text-xs font-bold text-[#2563EB] sm:block">
                {filteredToys.length}{" "}
                {filteredToys.length === 1
                  ? "item"
                  : "items"}
              </div>
            )}
        </div>

        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

            {[1, 2].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
              >
                {/* Image */}

                <div className="h-72 animate-pulse bg-[#E2E8F0] sm:h-80" />

                {/* Content */}

                <div className="space-y-4 p-5">
                  <div className="h-6 w-2/3 animate-pulse rounded-lg bg-[#E2E8F0]" />

                  <div className="h-4 w-full animate-pulse rounded bg-[#E2E8F0]" />

                  <div className="h-4 w-4/5 animate-pulse rounded bg-[#E2E8F0]" />

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-14 animate-pulse rounded-xl bg-[#E2E8F0]" />
                    <div className="h-14 animate-pulse rounded-xl bg-[#E2E8F0]" />
                    <div className="h-14 animate-pulse rounded-xl bg-[#E2E8F0]" />
                  </div>

                  <div className="h-12 animate-pulse rounded-xl bg-[#E2E8F0]" />
                </div>
              </div>
            ))}

          </div>
        )}

        {/* =================================================
            ERROR
        ================================================= */}

        {!loading &&
          errorMessage && (
            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-red-500 shadow-sm">
                <FiRefreshCw size={22} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#172033]">
                Something went wrong
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-red-600">
                {errorMessage}
              </p>

              <button
                type="button"
                onClick={handleRetry}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1E3A8A]"
              >
                <FiRefreshCw size={15} />
                Try Again
              </button>
            </div>
          )}

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {!loading &&
          !errorMessage &&
          filteredToys.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                <FiBookOpen size={26} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#172033]">
                No learning resources found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                There are currently no
                resources available in{" "}
                {activeCategory}. Try another
                category.
              </p>
            </div>
          )}

        {/* =================================================
            TOY CARDS
        ================================================= */}

        {!loading &&
          !errorMessage &&
          filteredToys.length > 0 && (
            <>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

                {visibleToys.map((toy) => (
                  <article
                    key={toy._id}
                    className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-xl hover:shadow-[#1E3A8A]/10"
                  >
                    {/* =====================================
                        IMAGE
                    ===================================== */}

                    <div className="relative h-72 overflow-hidden bg-[#F1F5F9] sm:h-80">

                      {toy.toyPhoto ? (
                        <img
                          src={toy.toyPhoto}
                          alt={
                            toy.toyName ||
                            "Learning resource"
                          }
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#94A3B8]">
                          <FiBookOpen
                            size={40}
                          />
                        </div>
                      )}

                      {/* Image overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/50 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                      {/* Category */}

                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1E3A8A] shadow-sm backdrop-blur">
                        {toy.subCategory ||
                          "Learning"}
                      </span>
                    </div>

                    {/* =====================================
                        CONTENT
                    ===================================== */}

                    <div className="p-5 sm:p-6">

                      {/* Title */}

                      <h3 className="text-xl font-extrabold tracking-tight text-[#172033] sm:text-2xl">
                        {toy.toyName ||
                          "Untitled Resource"}
                      </h3>

                      {/* Description */}

                      <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#64748B]">
                        {toy.detailDescription
                          ? toy
                              .detailDescription
                              .length > 110
                            ? `${toy.detailDescription.slice(
                                0,
                                110
                              )}...`
                            : toy.detailDescription
                          : "Explore this educational resource and discover a more engaging way to learn."}
                      </p>

                      {/* =====================================
                          META
                      ===================================== */}

                      <div className="mt-5 grid grid-cols-3 divide-x divide-[#E2E8F0] overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3">

                        {/* Price */}

                        <div className="px-2 text-center">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                            Price
                          </p>

                          <p className="mt-1 text-sm font-extrabold text-[#1E3A8A] sm:text-base">
                            $
                            {Number(
                              toy.price || 0
                            ).toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity */}

                        <div className="px-2 text-center">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                            Available
                          </p>

                          <p className="mt-1 text-sm font-extrabold text-[#172033] sm:text-base">
                            {toy.availableQuantity ??
                              0}
                          </p>
                        </div>

                        {/* Rating */}

                        <div className="px-2 text-center">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                            Rating
                          </p>

                          <div className="mt-1 flex items-center justify-center gap-1">
                            <AiFillStar className="text-[#F97316]" />

                            <span className="text-sm font-extrabold text-[#172033] sm:text-base">
                              {toy.toyRating ??
                                "N/A"}
                            </span>
                          </div>
                        </div>

                      </div>

                      {/* =====================================
                          CTA
                      ===================================== */}

                      <Link
                        to={`/viewdetails/${toy._id}`}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#1E3A8A] hover:shadow-lg hover:shadow-[#2563EB]/20"
                      >
                        <BsEyeFill />

                        View Details

                        <BsArrowRight className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}

              </div>

              {/* =================================================
                  SEE ALL / SHOW LESS
              ================================================= */}

              {filteredToys.length > 2 && (
                <div className="mt-9 flex flex-col items-center">

                  <button
                    type="button"
                    onClick={() =>
                      setShowAll(!showAll)
                    }
                    className="inline-flex items-center gap-2 rounded-xl border border-[#2563EB]/20 bg-white px-6 py-3 text-sm font-bold text-[#2563EB] shadow-sm transition-all duration-200 hover:border-[#2563EB]/40 hover:bg-[#EFF6FF]"
                  >
                    {showAll
                      ? "Show Less"
                      : `See All ${filteredToys.length}`}

                    {showAll ? (
                      <FiChevronUp
                        size={16}
                      />
                    ) : (
                      <FiChevronDown
                        size={16}
                      />
                    )}
                  </button>

                  {/* Small info */}

                  <p className="mt-3 text-xs text-[#94A3B8]">
                    {showAll
                      ? `Showing all ${filteredToys.length} resources`
                      : `Showing ${Math.min(
                          2,
                          filteredToys.length
                        )} of ${
                          filteredToys.length
                        } resources`}
                  </p>
                </div>
              )}
            </>
          )}
      </div>
    </section>
  );
};

export default Category;