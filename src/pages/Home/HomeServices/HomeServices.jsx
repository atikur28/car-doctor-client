import { useEffect, useState } from "react";
import SingleService from "./SingleService/SingleService";
import { Link } from "react-router-dom";

const HomeServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
          .then(res => res.json())
          .then(data => setServices(data))
    },[])

    return (
        <div className="my-10">
            <p className="text-[#FF3811] font-bold text-center mb-2">Service</p>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Our Service Area</h2>
            <p className="lg:w-[717px] px-2 text-center mx-auto text-[#737373]">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {
                    services.map(service => <SingleService key={service.service_id} service={service}></SingleService>)
                }
            </div>
            <div className="w-max mx-auto">
                <Link><button className="text-[#FF3811] font-bold py-3 px-5 rounded border border-[#FF3811]">More Services</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;