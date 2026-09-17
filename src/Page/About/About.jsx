import {
  FiMapPin,
  FiMessageSquare,
  FiStar,
} from "react-icons/fi";

const About = () => {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1E6] text-[#F97316]">
              <FiMessageSquare size={15} />
            </span>

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2563EB]">
              From Our Community
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl lg:text-5xl">
            What learners{" "}
            <span className="text-[#2563EB]">
              say about us
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#64748B]">
            We believe learning should feel simple,
            engaging, and enjoyable. Here is what a
            member of our community has to say.
          </p>
        </div>

        {/* ==================================================
            TESTIMONIAL CARD
        ================================================== */}

        <div className="relative mx-auto mt-10 max-w-3xl">

          {/* Decorative Icon */}

          <div className="absolute -right-3 -top-4 hidden h-16 w-16 items-center justify-center rounded-2xl bg-[#EFF6FF] text-[#2563EB] shadow-sm sm:flex">
            <FiMessageSquare size={28} />
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">

            {/* ==================================================
                PROFILE HEADER
            ================================================== */}

            <div className="relative overflow-hidden bg-[#1E3A8A] px-6 py-8 sm:px-10">

              {/* Decorative circles */}

              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white/10" />

              <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left">

                {/* Profile Image */}

                <div className="relative shrink-0">
                  <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-white/20 bg-white/10 shadow-lg sm:h-28 sm:w-28">
                    <img
                      src="https://img.lovepik.com/element/40044/3665.png_300.png"
                      alt="Customer profile"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Rating Badge */}

                  <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#1E3A8A] bg-[#F97316] text-white">
                    <FiStar
                      size={13}
                      className="fill-white"
                    />
                  </div>
                </div>

                {/* User Information */}

                <div className="mt-5 sm:ml-6 sm:mt-0">
                  <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                    Sahadat Hossain
                  </h3>

                  <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-blue-100 sm:justify-start">
                    <FiMapPin size={15} />

                    <span>
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                REVIEW
            ================================================== */}

            <div className="px-6 py-8 sm:px-10 sm:py-10">

              {/* Rating */}

              <div className="flex items-center justify-center gap-1 sm:justify-start">
                {[1, 2, 3, 4, 5].map(
                  (star) => (
                    <FiStar
                      key={star}
                      size={20}
                      className="fill-[#F97316] text-[#F97316]"
                    />
                  )
                )}

                <span className="ml-2 text-sm font-bold text-[#172033]">
                  5.0
                </span>
              </div>

              {/* Review */}

              <blockquote className="mt-6 text-center text-lg font-medium leading-8 text-[#172033] sm:text-left sm:text-xl">
                “Thank you for creating a learning
                platform that makes education feel
                more engaging and enjoyable. The
                experience is simple to use and the
                resources are easy to explore.”
              </blockquote>

              {/* Divider */}

              <div className="my-7 h-px bg-[#E2E8F0]" />

              {/* Bottom Information */}

              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-[#172033]">
                    Community Feedback
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    Helping us build a better learning
                    experience
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-xs font-bold text-[#2563EB]">
                  <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

                  Learner Community
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            BOTTOM MESSAGE
        ================================================== */}

        <div className="mt-10 text-center">
          <p className="text-sm text-[#64748B]">
            Your feedback helps us improve every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;