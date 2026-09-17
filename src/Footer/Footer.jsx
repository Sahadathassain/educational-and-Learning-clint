import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#172554] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">

        {/* ================= TOP BRAND AREA ================= */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">

          {/* Brand */}
          <div className="max-w-sm">

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_P5oCkEo80h-NCtlhFoMkGMJYxS_g9vcXw&usqp=CAU"
                  alt="Educational and Learning"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h2 className="text-lg font-extrabold">
                  Educational & Learning
                </h2>

                <p className="text-[11px] font-medium tracking-wide text-white/50">
                  Learn • Explore • Grow
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Discover educational resources and learning tools designed
              to make learning more engaging, interactive, and enjoyable.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition hover:bg-[#2563EB] hover:text-white"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition hover:bg-[#2563EB] hover:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition hover:bg-[#2563EB] hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/60 transition hover:bg-[#F97316] hover:text-white"
              >
                <FaInstagram />
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/alltoys"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                All Toys
              </Link>

              <Link
                to="/blog"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Blog
              </Link>

              <Link
                to="/register"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Create Account
              </Link>

            </div>
          </div>

          {/* Company */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Careers
              </Link>

              <Link
                to="/"
                className="block text-sm text-white/55 transition hover:text-white"
              >
                Press Kit
              </Link>

            </div>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Connected
            </h3>

            <p className="mt-5 text-sm leading-6 text-white/55">
              Get updates about new learning resources and educational
              products.
            </p>

            <form className="mt-5">

              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">

                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4F46E5]"
                >
                  Subscribe
                </button>

              </div>

            </form>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 h-px bg-white/10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Educational & Learning.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;