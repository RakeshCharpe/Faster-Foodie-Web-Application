import { LOGO_URL } from "../Utils/constants";

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white flex justify-between items-center p-4">
      <div className="copyright-container flex items-center">
        <div className="w-20">
          <img
            src={require("../../images/images-removebg-preview.png")}
            alt="footer-logo"
          />
        </div>
        <div className="text-xs">
          <p>© 2024 Rakesh Technologies Pvt. Ltd</p>
        </div>
      </div>
      <div className="text-sm ">
        <h5>Contact Us</h5>
        <p>Support Email Id: abc@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
