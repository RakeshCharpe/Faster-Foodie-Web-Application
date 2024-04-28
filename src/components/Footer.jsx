import { LOGO_URL } from "../Utils/constants";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="copyright-container">
        <div className="footer-logo">
          <img
            src={require("../../images/images-removebg-preview.png")}
            alt="footer-logo"
          />
        </div>
        <div className="copyright">
          <p>© 2024 Rakesh Technologies Pvt. Ltd</p>
        </div>
      </div>
      <div className="contact-info">
        <h5>Contact Us</h5>
        <p>Support Email Id: abc@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
