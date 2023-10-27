const CheckoutBanner = () => {
  return (
    <div
      className="h-[30vh] flex justify-center items-center rounded-xl mb-10 xl:mx-2"
      style={{
        background:
          "url(https://i.ibb.co/J7vNG91/checkout.png), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))",

        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
        Check Out
      </h1>
    </div>
  );
};

export default CheckoutBanner;
