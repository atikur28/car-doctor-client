import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="carousel h-[80vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/vVC78pK/1.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/Jkt9DCm/2.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/VT8yMnX/3.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/8zJJj6H/4.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tJcfH0f/5.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/Lvzv1rv/6.jpg"
          className="w-full"
        />
        <div className="absolute flex h-full w-full items-center bg-gradient-to-r from-[#151515] to-[#15151500] pl-5 md:pl-20">
          <div>
            <h1 className="md:w-[463px] text-3xl md:text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
            <p className="md:w-[522px] text-white md:font-semibold mt-3 mb-5 lg:mt-5 md:mb-8">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex gap-3">
                <Link><button className="rounded bg-[#FF3811] text-white font-semibold py-3 px-3">Discover More</button></Link>
                <Link><button className="rounded border border-white text-white font-semibold py-3 px-3">Latest Project</button></Link>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 gap-2 md:gap-5 right-5 md:right-10 lg:right-20 bottom-5">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
