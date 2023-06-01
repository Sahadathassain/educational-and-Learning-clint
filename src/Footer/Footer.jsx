import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-sky-400 text-base-content w-full">
        <div className="flex flex-wrap justify-center items-center">
          <img
            className="w-10 h-10 rounded-lg mr-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_P5oCkEo80h-NCtlhFoMkGMJYxS_g9vcXw&usqp=CAU"
            alt=""
          />
          <p className="text-center">Educational and Learning<br />Providing reliable tech since 2022</p>
        </div>

        <div className="mt-4">
          <span className="footer-title">Follow Us</span>
          <div className="flex justify-center mt-3">
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="mr-2 h-8 w-8" />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className="mr-2 h-8 w-8" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitterSquare className="mr-2 h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare className="mr-2 h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="mt-4">
          <span className="footer-title">Company</span>
          <a className="link link-hover block mt-2">About us</a>
          <a className="link link-hover block mt-2">Contact</a>
          <a className="link link-hover block mt-2">Jobs</a>
          <a className="link link-hover block mt-2">Press kit</a>
        </div>

        <div className="mt-4">
          <span className="footer-title">Contact Us</span>
          <form>
            <div className="text-black mt-2">
              <input
                type="email"
                className="form-control w-full"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="btn btn-block text-xl mt-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 text-white font-semibold rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
      <div className="mt-4">
        <div className="bg-base-200 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
