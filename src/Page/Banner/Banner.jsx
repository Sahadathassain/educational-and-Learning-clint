import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#4F46E5]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10">

            {/* Small label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-white px-3.5 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#F97316]" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1E3A8A]">
                Learn • Explore • Grow
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#172033] sm:text-5xl lg:text-6xl">
              Discover a better way to{" "}
              <span className="text-[#2563EB]">
                learn.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#64748B] sm:text-lg">
              Explore science, mathematics, languages, social studies,
              arts, technology and more through an engaging learning
              experience designed for curious minds.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/alltoys"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3A8A] hover:shadow-xl"
              >
                Explore Learning
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
              </Link>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-bold text-[#172033] transition-all duration-200 hover:border-[#2563EB]/30 hover:bg-[#EFF6FF] hover:text-[#2563EB]"
              >
                Read Our Blog
              </Link>

            </div>

            {/* Small trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                  ✓
                </span>
                Diverse subjects
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                  ✓
                </span>
                Engaging learning
              </div>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl shadow-[#1E3A8A]/10">

              <img
                src="https://static.vecteezy.com/system/resources/previews/016/546/156/original/e-learning-and-distance-education-banner-template-with-tiny-people-characters-among-books-educational-internet-computer-courses-and-online-schooling-internet-technology-illustration-free-vector.jpg"
                alt="Online education and learning"
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[400px] lg:h-[460px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#1E3A8A]/90 p-4 backdrop-blur-md sm:inset-x-7 sm:bottom-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Learning for every curious mind
                </p>

                <p className="mt-1 text-sm font-bold text-white sm:text-base">
                  Explore. Learn. Build your knowledge.
                </p>
              </div>
            </div>

            {/* Floating category card */}
            <div className="absolute -left-3 top-8 hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-xl sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1E6] text-[#F97316]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-xs text-[#64748B]">
                    Discover
                  </p>

                  <p className="text-sm font-bold text-[#172033]">
                    New Topics
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-3 hidden h-20 w-20 rounded-2xl bg-[#F97316] sm:block lg:-right-6" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;