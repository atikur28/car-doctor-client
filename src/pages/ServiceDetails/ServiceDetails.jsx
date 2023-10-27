import { Link, useLoaderData } from "react-router-dom";
import NavbarOne from "../SharedPages/NavbarOne/NavbarOne";
import ServiceBanner from "./ServiceBanner/ServiceBanner";
import Facility from "./Facility/Facility";
import book from "../../assets/icons/bookCart.svg";
import { BsArrowRight } from "react-icons/bs";

const ServiceDetails = () => {
  const services = useLoaderData();
  const {_id, title, img, price, description, facility } = services || {};

  return (
    <div>
      <NavbarOne></NavbarOne>
      <ServiceBanner></ServiceBanner>
      <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        <div className="col-span-2 w-max mx-auto">
          <img
            className="w-[270px] md:w-[400px] lg:w-[600px] xl:w-[800px] md:h-[200px] lg:h-[300px] xl:h-[400px] rounded-lg mx-auto mt-3"
            src={img}
            alt=""
          />
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mt-8">
            {title}
          </h1>
          <p className="text-[#737373] mt-5 w-[270px] md:w-[400px] lg:w-[600px] xl:w-[800px]">
            {description}
          </p>
          <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {facility.map((data, idx) => (
              <Facility key={idx} data={data}></Facility>
            ))}
          </div>
          <p className="text-[#737373] w-[270px] md:w-[400px] lg:w-[600px] xl:w-[800px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold my-7">
            3 Simple Steps to Process
          </h1>
          <p className="text-[#737373] w-[270px] md:w-[400px] lg:w-[600px] xl:w-[800px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.
          </p>
          <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <div className="rounded-md border p-5">
              <p className="w-[50px] h-[50px] flex justify-center items-center mx-auto bg-[#FF3811] rounded-full text-white font-bold">
                01
              </p>
              <p className="text-lg font-bold text-center mt-2">STEP ONE</p>
              <p className="text-[#737373] text-center w-[150px]">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="rounded-md border p-5">
              <p className="w-[50px] h-[50px] flex justify-center items-center mx-auto bg-[#FF3811] rounded-full text-white font-bold">
                02
              </p>
              <p className="text-lg font-bold text-center mt-2">STEP TWO</p>
              <p className="text-[#737373] text-center w-[150px]">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="rounded-md border p-5">
              <p className="w-[50px] h-[50px] flex justify-center items-center mx-auto bg-[#FF3811] rounded-full text-white font-bold">
                03
              </p>
              <p className="text-lg font-bold text-center mt-2">STEP THREE</p>
              <p className="text-[#737373] text-center w-[150px]">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-10 bg-[#F3F3F3] rounded-lg">
            <h5 className="text-xl font-bold mb-2">Services</h5>
            <div className="flex justify-between items-center hover:text-[#FFF] bg-white hover:bg-[#FF3811] rounded py-2.5 px-5 mb-3">
              <p className="font-bold">Full Car Repair</p>
              <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
            </div>
            <div className="flex justify-between items-center hover:text-[#FFF] bg-white hover:bg-[#FF3811] rounded py-2.5 px-5 mb-3">
              <p className="font-bold">Engine Repair</p>
              <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
            </div>
            <div className="flex justify-between items-center hover:text-[#FFF] bg-white hover:bg-[#FF3811] rounded py-2.5 px-5 mb-3">
              <p className="font-bold">Automatic Services</p>
              <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
            </div>
            <div className="flex justify-between items-center hover:text-[#FFF] bg-white hover:bg-[#FF3811] rounded py-2.5 px-5 mb-3">
              <p className="font-bold">Engine Oil Change</p>
              <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
            </div>
            <div className="flex justify-between items-center hover:text-[#FFF] bg-white hover:bg-[#FF3811] rounded py-2.5 px-5">
              <p className="font-bold">Battery Charge</p>
              <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
            </div>
          </div>
          <div className="p-10 text-white bg-black rounded-lg my-10">
            <h5 className="text-xl font-bold mb-2">Download</h5>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src={book} alt="" />
                <div>
                  <p className="font-bold">Our Brochure</p>
                  <p className="text-sm text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <div className="w-max p-3 bg-[#FF3811] rounded">
                <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-3">
                <img src={book} alt="" />
                <div>
                  <p className="font-bold">Company Details</p>
                  <p className="text-sm text-[#A2A2A2]">Download</p>
                </div>
              </div>
              <div className="w-max p-3 bg-[#FF3811] rounded">
                <BsArrowRight className="text-2xl font-bold"></BsArrowRight>
              </div>
            </div>
          </div>
          <h1 className="text-center text-lg md:text-2xl lg:text-4xl font-bold mb-5">
            Price: ${price}
          </h1>
          <Link to={`/checkout/${_id}`}><button className="w-full py-3 bg-[#FF3811] text-white font-bold rounded">Proceed Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
