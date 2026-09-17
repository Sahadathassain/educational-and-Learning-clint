const Feedback = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-10 max-w-2xl text-center">

          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#F97316]" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#2563EB]">
              Your Voice Matters
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl">
            We do love to hear{" "}
            <span className="text-[#2563EB]">
              from you.
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-[#64748B]">
            Your feedback helps us create a better and more engaging
            learning experience.
          </p>

        </div>

        {/* ================= FORM CARD ================= */}
        <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-xl shadow-[#1E3A8A]/5">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* ================= LEFT INFO ================= */}
            <div className="relative overflow-hidden bg-[#1E3A8A] p-8 text-white sm:p-10 lg:p-12">

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#4F46E5]/30" />

              <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#2563EB]/30" />

              <div className="relative z-10">

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl backdrop-blur">
                  💬
                </div>

                <h3 className="text-2xl font-extrabold leading-tight sm:text-3xl">
                  Help us make learning better.
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                  Whether you have a suggestion, found something that
                  could be improved, or simply want to share your
                  experience, we d love to hear it.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                      ✓
                    </span>

                    <span className="text-sm text-white/80">
                      Share your experience
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                      ✓
                    </span>

                    <span className="text-sm text-white/80">
                      Suggest improvements
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm">
                      ✓
                    </span>

                    <span className="text-sm text-white/80">
                      Tell us what you love
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= FORM ================= */}
            <div className="bg-white p-6 sm:p-10 lg:p-12">

              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-bold text-[#172033]"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#172033]"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-[#172033]"
                  >
                    Subject
                    <span className="ml-1 font-normal text-[#94A3B8]">
                      (optional)
                    </span>
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What would you like to tell us?"
                    className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm text-[#172033] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-[#172033]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your feedback here..."
                    className="w-full resize-none rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3.5 text-sm leading-6 text-[#172033] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1E3A8A] hover:shadow-xl"
                >
                  Send Feedback

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                </button>

              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Feedback;