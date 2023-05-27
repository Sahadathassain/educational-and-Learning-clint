
import {

  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="">
          <img className="w-15 rounded-lg" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_P5oCkEo80h-NCtlhFoMkGMJYxS_g9vcXw&usqp=CAU' alt="" />
          <p>Educational and Learning <br /> Providing reliable tech since 2022</p>

        </div>

        <div className="">
          <span className="footer-title">Follow Us</span>
          <div className=" flex mt-3">

            <a href="https://www.linkedin.com/">
              <FaLinkedin className="mr-2 h-8 w-8" />
            </a>
            <a href="https://www.feacbook.com/">
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
        <div>

        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <div>
            <span className="footer-title">Contact Us</span>
            <form>
              <div className="form-group h-3 w-5 mt-7">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-10">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </footer>
      <div className="">
        <div className="bg-base-200 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;