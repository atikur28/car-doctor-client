import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white bg-black p-10 lg:py-20">
      <aside>
        <img className="" src="./src/assets/logo.svg" alt="" />
        <p className="w-[283px]">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial .
        </p>
      </aside>
      <nav>
        <header className="footer-title">About</header>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/services" className="link link-hover">Services</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link className="link link-hover">Why Car Doctor</Link>
        <Link to="/about" className="link link-hover">About Us</Link>
      </nav>
      <nav>
        <header className="footer-title">Support</header>
        <Link className="link link-hover">Support Center</Link>
        <Link className="link link-hover">Feedback</Link>
        <Link className="link link-hover">Accessability</Link>
      </nav>
    </footer>
  );
};

export default Footer;
