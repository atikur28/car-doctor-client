import { useLoaderData } from "react-router-dom";
import NavbarOne from "../SharedPages/NavbarOne/NavbarOne";
import CheckoutBanner from "./CheckoutBanner/CheckoutBanner";
import Swal from "sweetalert2";

const Checkout = () => {
  const checkingInfo = useLoaderData();

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const number = form.number.value;
    const email = form.email.value;
    const message = form.message.value;
    const order = {
      customerName: name,
      email,
      number,
      date,
      service: checkingInfo.title,
      service_id: checkingInfo._id,
      image: checkingInfo.img,
      price: checkingInfo.price,
      message,
    };

    fetch("https://car-doctor-server-kohl-phi.vercel.app/checkouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "It will be checked very soon!", "success");
          form.reset();
        }
      });
  };

  return (
    <div>
      <NavbarOne></NavbarOne>
      <CheckoutBanner></CheckoutBanner>
      <div className="my-16 xl:p-20 bg-[#F3F3F3]">
        <form onSubmit={handleCheckout}>
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 mb-10 px-1">
            <input
              className="w-full py-4 px-5 rounded-lg"
              type="text"
              placeholder="Full Name"
              name="name"
              required
            />
            <input
              className="w-full py-4 px-5 rounded-lg"
              type="date"
              placeholder="Date"
              name="date"
              required
            />
            <input
              className="w-full py-4 px-5 rounded-lg"
              type="text"
              placeholder="Your Phone"
              name="number"
              required
            />
            <input
              className="w-full py-4 px-5 rounded-lg"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div className="px-1 mb-5">
            <textarea
              className="w-full rounded-lg h-[300px] px-5 pt-5"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button className="w-full py-4 bg-[#FF3811] text-white font-bold rounded-lg">
            Order Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
