import { useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiPackage,
 
} from "react-icons/fi";

const SpecialProducts = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    {
      image:
        "https://cdn.thisiswhyimbroke.com/buying-guides/157/educational-toys-for-1-year-olds.jpg",
      title: "Early Learning",
      category: "Learning",
    },
    {
      image:
        "https://4.imimg.com/data4/OD/LF/MY-1969568/educational-toys-500x500.jpg",
      title: "Creative Learning",
      category: "Creative",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0275/5130/1768/files/81uxA7JTaPL._AC_SL1500_480x480.jpg?v=1648059937",
      title: "Learning Activities",
      category: "Activities",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0035/0715/9129/products/MagneticDrawingBoard-Whiteboard-90206_800x.jpg?v=1630927212",
      title: "Interactive Learning",
      category: "Interactive",
    },
    {
      image:
        "https://static.parenting.com/wp-content/uploads/2019/05/11005139/kbfeaturemicro.jpg",
      title: "Discovery Tools",
      category: "Discovery",
    },
    {
      image:
        "https://www.theschoolrun.com/sites/theschoolrun.com/files/styles/720/public/katamino_2.jpg?itok=LBAUXxp_",
      title: "Logic & Puzzle",
      category: "Logic",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0069/2299/3728/files/wall-tiles-play.jpg?v=1588691030",
      title: "Play & Explore",
      category: "Explore",
    },
  ];

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    const scrollAmount =
      container.clientWidth * 0.82;

    container.scrollBy({
      left:
        direction === "next"
          ? scrollAmount
          : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;

    const scrollLeft = container.scrollLeft;

    const itemWidth =
      container.scrollWidth / products.length;

    const currentIndex = Math.round(
      scrollLeft / itemWidth
    );

    setActiveSlide(
      Math.min(
        Math.max(currentIndex, 0),
        products.length - 1
      )
    );
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {/* Small label */}

            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1E6] text-[#F97316]">
                
              </span>

              <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#F97316]">
                Special Collection
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl lg:text-5xl">
              Discover something
              <span className="text-[#2563EB]">
                {" "}
                special.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#64748B]">
              Explore a curated collection of
              educational resources designed to make
              learning more engaging, creative, and
              enjoyable.
            </p>
          </div>

          {/* ==================================================
              DESKTOP CONTROLS
          ================================================== */}

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() =>
                scrollCarousel("prev")
              }
              aria-label="Previous products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#172033] shadow-sm transition hover:border-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]"
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollCarousel("next")
              }
              aria-label="Next products"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20 transition hover:bg-[#1D4ED8]"
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ==================================================
            CAROUSEL
        ================================================== */}

        <div className="relative mt-10">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product, index) => (
              <article
                key={index}
                className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#CBD5E1] hover:shadow-xl sm:w-[48%] lg:w-[32%]"
              >
                {/* ==================================================
                    IMAGE
                ================================================== */}

                <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172033]/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  {/* Category badge */}

                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#2563EB] shadow-sm backdrop-blur">
                    {product.category}
                  </span>
                </div>

                {/* ==================================================
                    CONTENT
                ================================================== */}

                <div className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#172033]">
                        {product.title}
                      </h3>

                      <p className="mt-1 text-sm text-[#64748B]">
                        Explore and learn
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB] transition group-hover:bg-[#2563EB] group-hover:text-white">
                      <FiPackage size={18} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ==================================================
            MOBILE CONTROLS
        ================================================== */}

        <div className="mt-5 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-1.5">
            {products.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-6 bg-[#2563EB]"
                    : "w-1.5 bg-[#CBD5E1]"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                scrollCarousel("prev")
              }
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#172033] shadow-sm"
            >
              <FiArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() =>
                scrollCarousel("next")
              }
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-sm"
            >
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ==================================================
            DESKTOP PROGRESS
        ================================================== */}

        <div className="mt-7 hidden items-center gap-3 md:flex">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E2E8F0]">
            <div
              className="h-full rounded-full bg-[#2563EB] transition-all duration-300"
              style={{
                width: `${
                  ((activeSlide + 1) /
                    products.length) *
                  100
                }%`,
              }}
            />
          </div>

          <span className="min-w-[55px] text-right text-xs font-semibold text-[#64748B]">
            {String(activeSlide + 1).padStart(
              2,
              "0"
            )}{" "}
            / {String(products.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;