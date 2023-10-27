import PropTypes from "prop-types";

const Facility = ({data}) => {
    const {name, details} = data || {};
    return (
        <div className="w-[180px] md:w-[200px] lg:w-[250px] xl:w-[300px] mx-auto border p-5 bg-[#F3F3F3] rounded-md border-t-2 border-t-[#FF3811]">
            <p className="font-bold mb-3">{name}</p>
            <p className="text-[#737373]">{details}</p>
        </div>
    );
};

Facility.propTypes = {
    data: PropTypes.object
}

export default Facility;