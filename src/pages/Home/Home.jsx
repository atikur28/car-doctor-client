import NavbarOne from "../SharedPages/NavbarOne/NavbarOne";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeServices from "./HomeServices/HomeServices";
import Timetable from "../../assets/icons/timetable.svg";
import Calling from "../../assets/icons/calling.svg";
import Location from "../../assets/icons/location.svg";
import HomeTeam from "./HomeTeam/HomeTeam";

const Home = () => {
  return (
    <div>
      <NavbarOne></NavbarOne>
      <HomeBanner></HomeBanner>
      <HomeAbout></HomeAbout>
      <HomeServices></HomeServices>
      <div className="bg-black my-16 rounded-2xl mx-2 lg:mx-10 xl:mx-20">
        <div className="w-max mx-auto grid grid-cols-1 lg:grid-cols-3 py-20 gap-5">
          <div className="w-max md:mx-auto flex items-center gap-3">
            <img src={Timetable} alt="" />
            <div>
              <p className="text-white font-medium">
                We are open monday-friday
              </p>
              <h3 className="text-white text-2xl font-bold">
                7:00 am - 9:00 pm
              </h3>
            </div>
          </div>
          <div className="w-max md:mx-auto flex items-center gap-3">
            <img src={Calling} alt="" />
            <div>
              <p className="text-white font-medium">Have a question?</p>
              <h3 className="text-white text-2xl font-bold">+2546 251 2658</h3>
            </div>
          </div>
          <div className="w-max md:mx-auto flex items-center gap-3">
            <img src={Location} alt="" />
            <div>
              <p className="text-white font-medium">
                Need a repair? our address
              </p>
              <h3 className="text-white text-2xl font-bold">
                Liza Street, New York
              </h3>
            </div>
          </div>
        </div>
      </div>
      <HomeTeam></HomeTeam>
    </div>
  );
};

export default Home;
