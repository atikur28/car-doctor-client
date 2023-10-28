import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleOrder = ({ item, handleDelete, handleApprove }) => {
  const { _id, image, customerName, service, number, price, date, status } =
    item || {};

  return (
    <div className="flex items-center flex-col md:flex-row md:gap-10 xl:gap-20 flex-wrap mb-10 border rounded-xl py-4 md:px-1 lg:px-4">
      <button
        onClick={() => handleDelete(_id)}
        className="btn btn-circle bg-black text-white hover:bg-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <img className="w-[150px] rounded-md" src={image} alt="" />
        <div className="w-[160px] xl:w-fit">
          <h4 className="text-[#444444] font-bold">{customerName}</h4>
          <p className="text-sm text-[#A2A2A2] font-semibold my-1">
            Service: {service}
          </p>
          <p className="text-sm text-[#A2A2A2] font-semibold">
            Phone: {number}
          </p>
        </div>
      </div>
      <h4 className="text-[#444444] font-bold grow">${price}</h4>
      <h4 className="text-[#444444] font-bold grow">{date}</h4>
      {status === "Approved" ? (
        <div className="py-1 px-3 font-semibold border border-[#29B170] text-[#29B170]">
          Approved
        </div>
      ) : (
        <Link>
          <button
            onClick={() => handleApprove(_id)}
            className="bg-[#FF3811] py-1 px-3 font-semibold rounded text-white"
          >
            Pending
          </button>
        </Link>
      )}
    </div>
  );
};

SingleOrder.propTypes = {
  item: PropTypes.object,
  handleDelete: PropTypes.func,
  handleApprove: PropTypes.func,
};

export default SingleOrder;
