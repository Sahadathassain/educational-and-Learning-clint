const blogPosts = [
  {
    id: 1,
    category: "Mathematics",
    icon: "∑",
    question: "Why is Mathematics Important in Everyday Life?",
    answer:
      "Mathematics is used in many everyday activities, from managing money and calculating discounts to measuring distance, time, and quantities. It also helps us develop logical thinking, solve problems systematically, and make better decisions based on numbers and patterns.",
  },
  {
    id: 2,
    category: "Science",
    icon: "⚗",
    question: "Why is Scientific Thinking Important?",
    answer:
      "Scientific thinking helps us understand the world through observation, evidence, testing, and logical reasoning. Instead of accepting an idea without evidence, scientific thinking encourages us to ask questions, examine information, test explanations, and draw conclusions from reliable evidence.",
  },
  {
    id: 3,
    category: "Study Skills",
    icon: "✓",
    question: "How Can You Build an Effective Study Routine?",
    answer:
      "An effective study routine starts with clear goals and a realistic schedule. Breaking large topics into smaller sessions, reviewing lessons regularly, practicing with questions, taking short breaks, and tracking progress can make studying more organized and productive.",
  },
  {
    id: 4,
    category: "Critical Thinking",
    icon: "?",
    question: "How Can You Improve Your Critical Thinking Skills?",
    answer:
      "Critical thinking means carefully examining information before accepting a conclusion. You can improve it by asking questions, checking evidence, considering different viewpoints, identifying assumptions, and separating facts from opinions.",
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#1E3A8A]">

        {/* Decorative shapes */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2563EB]/30 blur-3xl" />

        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#F97316]/20 blur-3xl" />

        <div className="absolute right-[20%] top-1/2 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="max-w-3xl">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">

              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#F97316] text-xs font-bold text-white">
                +
              </span>

              Learning Resources
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn something new.
              <span className="mt-2 block text-blue-200">
                Every day.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Explore simple and practical educational topics designed to
              help you understand important concepts and improve your learning
              journey.
            </p>

          </div>
        </div>
      </section>

      {/* ================= BLOG CONTENT ================= */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Section Header */}
        <div className="mb-10">

          <div className="mb-3 flex items-center gap-3">

            <span className="h-1 w-10 rounded-full bg-[#F97316]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">
              Educational Blog
            </p>

          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
            Explore & Learn
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Discover useful ideas, explanations, and learning strategies
            across different educational subjects.
          </p>

        </div>

        {/* ================= BLOG CARDS ================= */}
        <div className="space-y-6">

          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="p-6 sm:p-8">

                {/* Top Content */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-lg font-bold text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    {post.icon}
                  </div>

                  {/* Question */}
                  <div className="min-w-0 flex-1">

                    {/* Category */}
                    <div className="mb-3 flex flex-wrap items-center gap-3">

                      <span className="rounded-full bg-[#FFF1E6] px-3 py-1 text-xs font-bold text-[#F97316]">
                        {post.category}
                      </span>

                      <span className="text-xs font-medium text-slate-400">
                        Topic {String(index + 1).padStart(2, "0")}
                      </span>

                    </div>

                    <h2 className="text-xl font-bold leading-8 text-[#172033] sm:text-2xl">
                      {post.question}
                    </h2>

                  </div>
                </div>

                {/* Answer Box */}
                <div className="mt-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 sm:p-6">

                  <div className="mb-3 flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-[#F97316]" />

                    <span className="text-sm font-bold text-[#1E3A8A]">
                      Explanation
                    </span>

                  </div>

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {post.answer}
                  </p>

                </div>

              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-0 bg-[#F97316] transition-all duration-300 group-hover:w-full" />

            </article>
          ))}

        </div>
      </section>

      {/* ================= LEARNING CTA ================= */}
      <section className="border-t border-[#E2E8F0] bg-white">

        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 lg:px-8">

          {/* Icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF] text-2xl font-bold text-[#2563EB]">
            +
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#172033] sm:text-3xl">
            Keep Learning, Keep Growing
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Learning becomes easier when you understand concepts instead of
            simply memorizing them.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/alltoys"
              className="rounded-xl bg-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1E3A8A] hover:shadow-md"
            >
              Explore Learning
            </a>

            <a
              href="/"
              className="rounded-xl border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-bold text-[#172033] transition hover:border-blue-200 hover:bg-[#F8FAFC]"
            >
              Back to Home
            </a>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Blog;