const ImgGallery = () => {
  const galleryItems = [
    {
      image:
        "https://static-01.daraz.com.bd/p/eb9f0a994b3fdcf4aa798979cef9df29.jpg",
      title: "Learning Through Play",
      category: "Early Learning",
    },
    {
      image:
        "https://static-01.daraz.com.bd/p/60cea3dd7922298350aef90b90be5505.jpg_720x720.jpg_.webps",
      title: "Creative Learning",
      category: "Creativity",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/71uTsfIBmOL._AC_UF894,1000_QL80_.jpg",
      title: "Build & Discover",
      category: "STEM Learning",
    },
    {
      image:
        "https://i.ebayimg.com/images/g/uswAAOSwp-lkIeI4/s-l1600.jpg",
      title: "Explore New Ideas",
      category: "Educational Tools",
    },
    {
      image:
        "https://annainthehouse.com/wp-content/uploads/2021/11/montessori-toddler-toys-3.jpg",
      title: "Learn Naturally",
      category: "Montessori",
    },
    {
      image:
        "https://i.ebayimg.com/images/g/G3QAAOSwe61ftbcK/s-l1600.jpg",
      title: "Fun Learning",
      category: "Learning Toys",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />

              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
                Learning Collection
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl">
              Discover learning through{" "}
              <span className="text-[#2563EB]">play.</span>
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-[#64748B]">
              Explore educational tools and learning toys designed to make
              discovery more interactive, creative, and enjoyable.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <span className="text-sm font-semibold text-[#94A3B8]">
              06 Featured Items
            </span>
          </div>
        </div>

        {/* ================= IMAGE GRID ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1E3A8A]/10"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card content */}
              <div className="flex items-center justify-between gap-3 bg-white p-4">

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#172033]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-xs font-medium text-[#64748B]">
                    {item.category}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] transition-all duration-200 group-hover:bg-[#2563EB] group-hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>

              {/* Orange accent */}
              <div className="absolute left-0 top-0 h-1 w-0 bg-[#F97316] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImgGallery;