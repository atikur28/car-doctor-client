import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="hero py-5 md:py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 xl:gap-20 mx-2">
        <div className="text-center md:text-left lg:w-1/2">
          <p className="text-[#FF3811] font-bold mb-2">About Us</p>
          <h1 className="text-3xl md:text-5xl font-bold md:w-[400px] mb-5">
            We are qualified & of experience in this field
          </h1>
          <p className="text-[#737373] md:w-[489px] mb-2">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="text-[#737373] md:w-[489px] mb-5">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-5">Get More Info</button></Link>
        </div>
        <div className="relative card flex-shrink-0 lg:w-1/2">
          <img className="w-3/4 rounded-xl" src="https://i.ibb.co/CQhb4WT/person.jpg" alt="" />
          <img className="w-2/4 absolute right-5 top-1/2 border-4 border-white rounded-xl" src="https://i.ibb.co/StkXfCz/parts.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
