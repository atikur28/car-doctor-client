import PropTypes from "prop-types";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

const SingleService = ({service}) => {

    const {img, title, price} = service || {};

    return (
        <div className="p-5 border rounded-xl">
            <img className="w-[230px] md:w-[280px] md:h-[200px] rounded-xl" src={img} alt="" />
            <h3 className="text-xl font-bold my-2">{title}</h3>
            <div className="flex justify-between items-center text-[#FF3811]">
               <p className="font-bold">Price: ${price}</p>
               <Link><button><BsArrowRight className="text-xl font-semibold"></BsArrowRight></button></Link>
            </div>
        </div>
    );
};

SingleService.propTypes = {
    service: PropTypes.object,
}

export default SingleService;