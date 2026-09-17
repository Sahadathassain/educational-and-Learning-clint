import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiEye,
  FiPackage,
  FiStar,
  FiUser,
  FiRefreshCw,
} from "react-icons/fi";

const API_URL = "http://localhost:5000";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");

  const fetchAllToys = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/allData`);

      if (!response.ok) {
        throw new Error("Failed to fetch learning resources.");
      }

      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error("Error fetching toy data:", error);
      setError("Unable to load learning resources. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllToys();
  }, []);

  const handleSearch = async () => {
    const query = searchText.trim();

    if (!query) {
      fetchAllToys();
      return;
    }

    try {
      setSearching(true);
      setError("");

      const response = await fetch(
        `${API_URL}/alltoyByText/${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error("Search error:", error);
      setError("Search failed. Please try again.");
    } finally {
      setSearching(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ==================================================
          HERO / PAGE HEADER
      ================================================== */}
      <section className="relative overflow-hidden bg-[#1E3A8A]">
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
              Learning Collection
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore all
              <span className="block text-blue-200">
                learning resources.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Browse our collection of educational products and
              discover resources designed to make learning more
              engaging and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTENT
      ================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Search */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <FiSearch
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]"
              />

              <input
                type="text"
                value={searchText}
                onChange={(event) =>
                  setSearchText(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Search by resource or seller name..."
                className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] py-3.5 pl-11 pr-4 text-sm text-[#172033] outline-none transition placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
              />
            </div>

            <button
              onClick={handleSearch}
              disabled={searching}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/20 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {searching ? (
                <>
                  <FiRefreshCw
                    size={17}
                    className="animate-spin"
                  />
                  Searching...
                </>
              ) : (
                <>
                  <FiSearch size={17} />
                  Search
                </>
              )}
            </button>

            {searchText && (
              <button
                onClick={() => {
                  setSearchText("");
                  fetchAllToys();
                }}
                className="rounded-xl border border-[#E2E8F0] px-5 py-3.5 text-sm font-semibold text-[#64748B] transition hover:border-[#CBD5E1] hover:bg-[#F8FAFC] hover:text-[#172033]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ==================================================
            SECTION HEADER
        ================================================== */}
        <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              Browse Collection
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#172033] sm:text-3xl">
              All Learning Resources
            </h2>
          </div>

          {!loading && (
            <p className="text-sm text-[#64748B]">
              {toys.length}{" "}
              {toys.length === 1 ? "resource" : "resources"} found
            </p>
          )}
        </div>

        {/* ==================================================
            ERROR
        ================================================== */}
        {error && (
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 sm:flex-row">
            <p className="text-sm font-medium text-red-700">
              {error}
            </p>

            <button
              onClick={fetchAllToys}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm transition hover:bg-red-100"
            >
              <FiRefreshCw size={15} />
              Try Again
            </button>
          </div>
        )}

        {/* ==================================================
            LOADING
        ================================================== */}
        {loading ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="hidden md:block">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-7 gap-4 border-b border-[#E2E8F0] p-5 last:border-b-0"
                >
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-5 animate-pulse rounded bg-[#E2E8F0]"
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="space-y-4 p-4 md:hidden">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="space-y-4 rounded-xl border border-[#E2E8F0] p-5"
                >
                  <div className="h-5 w-2/3 animate-pulse rounded bg-[#E2E8F0]" />
                  <div className="h-4 w-1/2 animate-pulse rounded bg-[#E2E8F0]" />
                  <div className="h-4 w-1/3 animate-pulse rounded bg-[#E2E8F0]" />
                  <div className="h-10 w-full animate-pulse rounded bg-[#E2E8F0]" />
                </div>
              ))}
            </div>
          </div>
        ) : toys.length === 0 ? (

          /* ==================================================
              EMPTY STATE
          ================================================== */
          <div className="mt-8 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
              <FiPackage size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#172033]">
              No resources found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
              We couldnot find anything matching your search.
              Try another keyword or browse the full collection.
            </p>

            <button
              onClick={() => {
                setSearchText("");
                fetchAllToys();
              }}
              className="mt-6 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
            >
              View All Resources
            </button>
          </div>

        ) : (

          /* ==================================================
              DESKTOP TABLE
          ================================================== */
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[900px]">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Resource
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Seller
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Category
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Price
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Rating
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Available
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {toys.map((toy) => (
                    <tr
                      key={toy._id}
                      className="border-b border-[#E2E8F0] transition hover:bg-[#F8FAFC] last:border-b-0"
                    >
                      {/* Resource */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                            <FiBookIcon />
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-[190px] truncate text-sm font-bold text-[#172033]">
                              {toy.toyName}
                            </p>

                            <p className="mt-1 text-xs text-[#94A3B8]">
                              Educational resource
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Seller */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-2 text-sm text-[#64748B]">
                          <FiUser size={15} />
                          <span>{toy.sellerName}</span>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="px-5 py-5">
                        <span className="inline-flex rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-semibold text-[#C2410C]">
                          {toy.subCategory}
                        </span>
                      </td>

                      {/* Price */}
                      <td className="px-5 py-5">
                        <span className="text-sm font-bold text-[#172033]">
                          ${Number(toy.price || 0).toFixed(2)}
                        </span>
                      </td>

                      {/* Rating */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-1.5">
                          <FiStar
                            size={15}
                            className="fill-[#F97316] text-[#F97316]"
                          />

                          <span className="text-sm font-semibold text-[#172033]">
                            {toy.toyRating || "N/A"}
                          </span>
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="px-5 py-5">
                        <span
                          className={`text-sm font-semibold ${
                            Number(toy.availableQuantity) > 0
                              ? "text-[#2563EB]"
                              : "text-red-500"
                          }`}
                        >
                          {toy.availableQuantity}
                        </span>
                      </td>

                      {/* Action */}
                      <td className="px-5 py-5 text-right">
                        <Link to={`/viewdetails/${toy._id}`}>
                          <span className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#1D4ED8]">
                            <FiEye size={15} />
                            View Details
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ==================================================
                MOBILE CARDS
            ================================================== */}
            <div className="space-y-4 p-4 md:hidden">
              {toys.map((toy) => (
                <article
                  key={toy._id}
                  className="rounded-xl border border-[#E2E8F0] bg-white p-5 transition hover:border-[#CBD5E1] hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]">
                        <FiBookIcon />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-[#172033]">
                          {toy.toyName}
                        </h3>

                        <p className="mt-1 text-xs text-[#64748B]">
                          {toy.sellerName}
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-[#FFF7ED] px-2.5 py-1 text-[11px] font-bold text-[#C2410C]">
                      {toy.subCategory}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-[11px] text-[#94A3B8]">
                        Price
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#172033]">
                        ${Number(toy.price || 0).toFixed(2)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-[11px] text-[#94A3B8]">
                        Rating
                      </p>

                      <div className="mt-1 flex items-center gap-1">
                        <FiStar
                          size={13}
                          className="fill-[#F97316] text-[#F97316]"
                        />

                        <span className="text-sm font-bold text-[#172033]">
                          {toy.toyRating || "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-[11px] text-[#94A3B8]">
                        Available
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#2563EB]">
                        {toy.availableQuantity}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={`/viewdetails/${toy._id}`}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#1D4ED8]"
                  >
                    <FiEye size={16} />
                    View Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

/* Small reusable icon wrapper */
const FiBookIcon = () => (
  <FiPackage size={20} />
);

export default AllToys;