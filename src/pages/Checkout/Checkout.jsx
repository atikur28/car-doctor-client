import NavbarOne from "../SharedPages/NavbarOne/NavbarOne";
import CheckoutBanner from "./CheckoutBanner/CheckoutBanner";

const Checkout = () => {
    return (
        <div>
            <NavbarOne></NavbarOne>
            <CheckoutBanner></CheckoutBanner>
            <div className="my-16 xl:p-20 bg-[#F3F3F3]">
                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-5 mb-10 px-1">
                    <input className="w-full py-4 px-5 rounded-lg" type="text" placeholder="First Name" name="firstName" />
                    <input className="w-full py-4 px-5 rounded-lg" type="text" placeholder="Last Name" name="lastName" />
                    <input className="w-full py-4 px-5 rounded-lg" type="text" placeholder="Your Phone" name="number" />
                    <input className="w-full py-4 px-5 rounded-lg" type="email" placeholder="Your Email" name="email" />
                </div>
                <div className="px-1 mb-5">
                    <textarea className="w-full rounded-lg h-[300px] px-5 pt-5" name="message" placeholder="Your Message"></textarea>
                </div>
                <button className="w-full py-4 bg-[#FF3811] text-white font-bold rounded-lg">Order Confirm</button>
            </div>
        </div>
    );
};

export default Checkout;