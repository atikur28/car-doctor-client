import Facebook from "../../../assets/icons/facebook.svg";
import Twitter from "../../../assets/icons/twitter.svg";
import Linkedin from "../../../assets/icons/linkdin.svg";

const HomeTeam = () => {
    return (
        <div className="my-10">
            <p className="text-[#FF3811] font-bold text-center mb-2">Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Meet Our Team</h2>
            <p className="lg:w-[717px] px-2 text-center mx-auto text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 w-max mx-auto my-10 flex-wrap">
                <div className="w-max mx-auto p-5 border rounded-lg">
                    <img className="w-[250px] h-[200px] rounded-lg" src="https://i.ibb.co/V3ny95H/1.jpg" alt="" />
                    <h4 className="text-xl text-[#444] font-bold text-center mt-2">Car Engine Plug</h4>
                    <p className="text-[#737373] font-medium text-center mt-1">Engine Expert</p>
                    <div className="flex gap-5 w-max mx-auto mt-3">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="w-max mx-auto p-5 border rounded-lg">
                    <img className="w-[250px] h-[200px] rounded-lg" src="https://i.ibb.co/stbjZrd/22.jpg" alt="" />
                    <h4 className="text-xl text-[#444] font-bold text-center mt-2">Car Engine Plug</h4>
                    <p className="text-[#737373] font-medium text-center mt-1">Engine Expert</p>
                    <div className="flex gap-5 w-max mx-auto mt-3">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
                <div className="w-max mx-auto p-5 border rounded-lg">
                    <img className="w-[250px] h-[200px] rounded-lg" src="https://i.ibb.co/vVLKnys/33.jpg" alt="" />
                    <h4 className="text-xl text-[#444] font-bold text-center mt-2">Car Engine Plug</h4>
                    <p className="text-[#737373] font-medium text-center mt-1">Engine Expert</p>
                    <div className="flex gap-5 w-max mx-auto mt-3">
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Linkedin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTeam;