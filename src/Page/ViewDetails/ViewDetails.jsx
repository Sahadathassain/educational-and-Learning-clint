import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiDollarSign,
  FiStar,
  FiPackage,
  FiBookOpen,
  FiAlertCircle,

} from "react-icons/fi";

const API_URL = "https://educational-and-learning-server.vercel.app";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/allData/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch document details");
        }

        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error("Error fetching document details:", error);
        setError("We couldn't load this learning item.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  /* ---------------- Loading ---------------- */
  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-8 h-10 w-32 animate-pulse rounded-lg bg-[#E2E8F0]" />

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="h-[420px] animate-pulse rounded-2xl bg-[#E2E8F0]" />

            <div className="space-y-5">
              <div className="h-8 w-3/4 animate-pulse rounded-lg bg-[#E2E8F0]" />
              <div className="h-5 w-1/3 animate-pulse rounded-lg bg-[#E2E8F0]" />
              <div className="h-32 animate-pulse rounded-2xl bg-[#E2E8F0]" />
              <div className="h-24 animate-pulse rounded-2xl bg-[#E2E8F0]" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- Error ---------------- */
  if (error || !details) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
        <div className="w-full max-w-md rounded-2xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F97316]">
            <FiAlertCircle size={26} />
          </div>

          <h2 className="text-xl font-bold text-[#172033]">
            Unable to load details
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#64748B]">
            {error || "The requested learning item could not be found."}
          </p>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
          >
            <FiArrowLeft size={17} />
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const price = Number(details.price || 0);
  const rating = Number(details.toyRating || 0);
  const quantity = Number(details.availableQuantity || 0);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#172554]">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2563EB]/30 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#4F46E5]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            <FiArrowLeft size={17} />
            Back
          </button>

          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#93C5FD]">
              Learning Collection
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {details.toyName}
            </h1>

            {details.subCategory && (
              <div className="mt-5 inline-flex items-center rounded-full bg-[#F97316] px-4 py-1.5 text-sm font-semibold text-white">
                {details.subCategory}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#F8FAFC]">
              <img
                src={details.toyPhoto}
                alt={details.toyName}
                className="h-full w-full object-cover"
              />

              {quantity > 0 ? (
                <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#2563EB] shadow-sm backdrop-blur">
                  Available
                </span>
              ) : (
                <span className="absolute left-5 top-5 rounded-full bg-[#172033]/90 px-4 py-2 text-xs font-bold text-white shadow-sm">
                  Out of Stock
                </span>
              )}
            </div>
          </div>

          {/* Information */}
          <div>
            {/* Price + Rating */}
            <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#E2E8F0] pb-6">
              <div>
                <p className="mb-1 text-sm font-medium text-[#64748B]">
                  Price
                </p>

                <div className="flex items-center gap-1 text-3xl font-bold text-[#2563EB]">
                  <FiDollarSign size={25} />
                  {price.toFixed(2)}
                </div>
              </div>

              <div>
                <p className="mb-1 text-right text-sm font-medium text-[#64748B]">
                  Rating
                </p>

                <div className="flex items-center justify-end gap-2">
                  <FiStar className="fill-[#F97316] text-[#F97316]" size={20} />

                  <span className="text-xl font-bold text-[#172033]">
                    {rating.toFixed(1)}
                  </span>

                  <span className="text-sm text-[#64748B]">/ 5</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="py-7">
              <div className="mb-3 flex items-center gap-2">
                <FiBookOpen className="text-[#2563EB]" size={19} />

                <h2 className="text-lg font-bold text-[#172033]">
                  About this learning item
                </h2>
              </div>

              <p className="text-sm leading-7 text-[#64748B]">
                {details.detailDescription ||
                  "No description is available for this learning item."}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <FiPackage className="mb-3 text-[#2563EB]" size={20} />

                <p className="text-xs font-medium text-[#64748B]">
                  Available
                </p>

                <p className="mt-1 text-lg font-bold text-[#172033]">
                  {quantity}
                </p>
              </div>

              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <FiStar className="mb-3 text-[#F97316]" size={20} />

                <p className="text-xs font-medium text-[#64748B]">
                  Rating
                </p>

                <p className="mt-1 text-lg font-bold text-[#172033]">
                  {rating.toFixed(1)}
                </p>
              </div>

              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <FiBookOpen className="mb-3 text-[#4F46E5]" size={20} />

                <p className="text-xs font-medium text-[#64748B]">
                  Category
                </p>

                <p className="mt-1 truncate text-sm font-bold text-[#172033]">
                  {details.subCategory || "General"}
                </p>
              </div>
            </div>

            {/* Seller */}
            <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#64748B]">
                Seller Information
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#2563EB]">
                    <FiUser size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-[#64748B]">Seller</p>

                    <p className="truncate text-sm font-semibold text-[#172033]">
                      {details.sellerName || "Not provided"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1E6] text-[#F97316]">
                    <FiMail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-[#64748B]">Email</p>

                    <p className="truncate text-sm font-semibold text-[#172033]">
                      {details.sellerEmail || "Not provided"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom action */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8] hover:shadow-xl"
            >
              <FiArrowLeft size={17} />
              Continue Exploring
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ViewDetails;