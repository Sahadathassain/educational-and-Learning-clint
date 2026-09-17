import { useCallback, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import {
  FiArrowDown,
  FiArrowUp,
  FiEdit3,
  FiPackage,
  FiRefreshCw,
  FiStar,
  FiTrash2,
  FiUser,
} from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";

import UpdateToy from "../UpdateToy/UpdateToy";
import { AuthContext } from "../../../Providers/AuthProvider";

const API_URL = "http://localhost:5000";

const MyToys = () => {
  const { user, loading: authLoading } = useContext(AuthContext);

  const [myToysData, setMyToysData] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [sortOrder, setSortOrder] = useState(null);

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [deletingId, setDeletingId] = useState(null);

  /* ============================================================
     FETCH USER RESOURCES
  ============================================================ */

  const fetchMyToys = useCallback(async () => {
    // Wait until Firebase authentication finishes loading
    if (authLoading) {
      return;
    }

    // User is not logged in
    if (!user?.email) {
      setMyToysData([]);
      setLoading(false);
      setErrorMessage("");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const email = encodeURIComponent(user.email.trim());

      const response = await fetch(
        `${API_URL}/myToys/${email}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch resources. Status: ${response.status}`
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data received from server.");
      }

      setMyToysData(data);
    } catch (error) {
      console.error("Failed to fetch toy data:", error);

      setMyToysData([]);

      setErrorMessage(
        "Unable to load your learning resources. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [user?.email, authLoading]);

  useEffect(() => {
    fetchMyToys();
  }, [fetchMyToys]);

  /* ============================================================
     UPDATE MODAL
  ============================================================ */

  const handleUpdateClick = (toy) => {
    setSelectedToy(toy);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedToy(null);
  };

  /* ============================================================
     UPDATE RESOURCE
  ============================================================ */

  const handleToyUpdate = async (updatedToyData) => {
    if (!selectedToy?._id) {
      toast.error("Resource ID is missing.");
      return;
    }

    const toyId = selectedToy._id;

    try {
      const response = await fetch(
        `${API_URL}/updateToy/${toyId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: Number(updatedToyData.price),
            toyRating: Number(updatedToyData.toyRating),
            availableQuantity: Number(
              updatedToyData.availableQuantity
            ),
          }),
        }
      );

      if (!response.ok) {
        let message = "Failed to update resource.";

        try {
          const errorData = await response.json();

          if (errorData?.message) {
            message = errorData.message;
          }
        } catch {
          // Ignore JSON parsing error
        }

        throw new Error(message);
      }

      const result = await response.json();

      console.log("Updated resource:", result);

      /* ----------------------------------------------------------
         Update local state immediately
      ---------------------------------------------------------- */

      setMyToysData((prevData) =>
        prevData.map((toy) =>
          toy._id === toyId
            ? {
                ...toy,
                price: Number(updatedToyData.price),
                toyRating: Number(
                  updatedToyData.toyRating
                ),
                availableQuantity: Number(
                  updatedToyData.availableQuantity
                ),
              }
            : toy
        )
      );

      handleCloseModal();

      toast.success(
        "Learning resource updated successfully."
      );
    } catch (error) {
      console.error("Failed to update toy:", error);

      toast.error(
        error.message ||
          "Unable to update the resource. Please try again."
      );

      throw error;
    }
  };

  /* ============================================================
     SORT BY PRICE
  ============================================================ */

  const handleSort = () => {
    if (myToysData.length === 0) {
      return;
    }

    const nextOrder =
      sortOrder === "asc" ? "desc" : "asc";

    const sortedData = [...myToysData].sort((a, b) => {
      const priceA = Number(a.price) || 0;
      const priceB = Number(b.price) || 0;

      return nextOrder === "asc"
        ? priceA - priceB
        : priceB - priceA;
    });

    setSortOrder(nextOrder);
    setMyToysData(sortedData);
  };

  /* ============================================================
     DELETE RESOURCE
  ============================================================ */

  const handleDelete = async (toyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this learning resource?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeletingId(toyId);

      const response = await fetch(
        `${API_URL}/myToys/${toyId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        let message = "Failed to delete resource.";

        try {
          const errorData = await response.json();

          if (errorData?.message) {
            message = errorData.message;
          }
        } catch {
          // Ignore JSON parsing error
        }

        throw new Error(message);
      }

      const result = await response.json();

      console.log("Deleted resource:", result);

      setMyToysData((prevData) =>
        prevData.filter((item) => item._id !== toyId)
      );

      // Close modal if deleted item was selected
      if (selectedToy?._id === toyId) {
        handleCloseModal();
      }

      toast.success(
        "Learning resource deleted successfully."
      );
    } catch (error) {
      console.error("Failed to delete toy:", error);

      toast.error(
        error.message ||
          "Unable to delete the resource. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  };

  /* ============================================================
     AUTH LOADING
  ============================================================ */

  if (authLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
            <FiRefreshCw
              size={28}
              className="animate-spin"
            />
          </div>

          <h2 className="mt-5 text-xl font-bold text-[#172033]">
            Checking your account
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Please wait while we load your learning
            resources.
          </p>
        </div>
      </main>
    );
  }

  /* ============================================================
     RENDER
  ============================================================ */

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
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-100">
                <FiPackage size={13} />
                My Collection
              </span>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Manage your
                <span className="block text-blue-200">
                  learning resources.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                View, update, organize, and manage the
                educational resources you have added to the
                platform.
              </p>
            </div>

            {/* User information */}

            {user && (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/10">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={
                        user.displayName || "User"
                      }
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <FiUser size={18} />
                  )}
                </div>

                <div className="max-w-[220px] pr-3">
                  <p className="truncate text-sm font-semibold text-white">
                    {user.displayName || "Account"}
                  </p>

                  <p className="truncate text-xs text-blue-200">
                    {user.email}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* ==================================================
            TOOLBAR
        ================================================== */}

        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2563EB]">
              Resource Management
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#172033]">
              Your Resources
            </h2>

            {!loading && (
              <p className="mt-1 text-sm text-[#64748B]">
                {myToysData.length}{" "}
                {myToysData.length === 1
                  ? "resource"
                  : "resources"}{" "}
                in your collection
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Refresh */}

            <button
              type="button"
              onClick={fetchMyToys}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#64748B] shadow-sm transition hover:bg-[#F8FAFC] hover:text-[#172033] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiRefreshCw
                size={16}
                className={
                  loading ? "animate-spin" : ""
                }
              />

              Refresh
            </button>

            {/* Sort */}

            <button
              type="button"
              onClick={handleSort}
              disabled={myToysData.length === 0}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-bold text-white shadow-md shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {sortOrder === "asc" ? (
                <FiArrowUp size={16} />
              ) : (
                <FiArrowDown size={16} />
              )}

              {sortOrder === "asc"
                ? "Price: Low to High"
                : sortOrder === "desc"
                ? "Price: High to Low"
                : "Sort by Price"}
            </button>
          </div>
        </div>

        {/* ==================================================
            ERROR
        ================================================== */}

        {errorMessage && (
          <div className="mt-6 flex flex-col justify-between gap-4 rounded-2xl border border-red-200 bg-red-50 p-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold text-red-700">
                Unable to load resources
              </p>

              <p className="mt-1 text-xs text-red-600">
                {errorMessage}
              </p>
            </div>

            <button
              type="button"
              onClick={fetchMyToys}
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-red-700 shadow-sm transition hover:bg-red-100"
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
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
              >
                {/* Image skeleton */}

                <div className="h-48 bg-[#E2E8F0]" />

                <div className="p-5">
                  <div className="h-5 w-2/3 rounded bg-[#E2E8F0]" />

                  <div className="mt-3 h-4 w-1/2 rounded bg-[#E2E8F0]" />

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-16 rounded-xl bg-[#E2E8F0]" />
                    <div className="h-16 rounded-xl bg-[#E2E8F0]" />
                  </div>

                  <div className="mt-5 h-10 rounded-xl bg-[#E2E8F0]" />
                </div>
              </div>
            ))}
          </div>
        ) : myToysData.length === 0 ? (
          /* ==================================================
             EMPTY STATE
          ================================================== */

          <div className="mt-8 rounded-3xl border border-dashed border-[#CBD5E1] bg-white px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
              <FiPackage size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#172033]">
              No resources yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
              You have not added any learning resources to
              your collection yet.
            </p>

            <p className="mx-auto mt-3 max-w-lg rounded-xl bg-[#FFF7ED] px-4 py-3 text-xs leading-5 text-[#C2410C]">
              Make sure you add resources while logged in
              with the same account shown above.
            </p>
          </div>
        ) : (
          /* ==================================================
             RESOURCE CARDS
          ================================================== */

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {myToysData.map((item) => (
              <article
                key={item._id}
                className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-lg"
              >
                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9]">
                  {item.toyPhoto ? (
                    <img
                      src={item.toyPhoto}
                      alt={
                        item.toyName ||
                        "Learning resource"
                      }
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#94A3B8]">
                      <FiPackage size={35} />
                    </div>
                  )}

                  {/* Category */}

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#C2410C] shadow-sm backdrop-blur">
                    {item.subCategory || "General"}
                  </span>
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="p-5">
                  {/* Title + Rating */}

                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold text-[#172033]">
                        {item.toyName ||
                          "Untitled Resource"}
                      </h3>

                      <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-[#64748B]">
                        <FiUser size={13} />

                        {item.sellerName ||
                          user?.displayName ||
                          "Seller"}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-1">
                      <FiStar
                        size={14}
                        className="fill-[#F97316] text-[#F97316]"
                      />

                      <span className="text-sm font-bold text-[#172033]">
                        {item.toyRating ?? "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* ==================================================
                      STATS
                  ================================================== */}

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-[11px] font-medium text-[#94A3B8]">
                        Price
                      </p>

                      <p className="mt-1 text-base font-bold text-[#172033]">
                        $
                        {Number(
                          item.price || 0
                        ).toFixed(2)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-[#F8FAFC] p-3">
                      <p className="text-[11px] font-medium text-[#94A3B8]">
                        Available
                      </p>

                      <p className="mt-1 text-base font-bold text-[#2563EB]">
                        {item.availableQuantity ??
                          0}
                      </p>
                    </div>
                  </div>

                  {/* ==================================================
                      ACTIONS
                  ================================================== */}

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {/* Update */}

                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateClick(item)
                      }
                      disabled={
                        deletingId === item._id
                      }
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-bold text-[#2563EB] transition hover:border-[#2563EB] hover:bg-[#EFF6FF] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <FiEdit3 size={16} />
                      Update
                    </button>

                    {/* Delete */}

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(item._id)
                      }
                      disabled={
                        deletingId === item._id
                      }
                      className="flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-bold text-red-600 transition hover:border-red-200 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {deletingId === item._id ? (
                        <>
                          <FiRefreshCw
                            size={16}
                            className="animate-spin"
                          />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <FiTrash2 size={16} />
                          Delete
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ==================================================
          UPDATE MODAL
      ================================================== */}

      {showModal && selectedToy && (
        <UpdateToy
          toy={selectedToy}
          onClose={handleCloseModal}
          onUpdate={handleToyUpdate}
        />
      )}

      {/* ==================================================
          TOAST
      ================================================== */}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        theme="light"
      />
    </main>
  );
};

export default MyToys;