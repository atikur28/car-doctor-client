import { useContext, useEffect, useState } from "react";
import NavbarTwo from "../SharedPages/NavbarTwo/NavbarTwo";
import OrderBanner from "./OrderBanner/OrderBanner";
import { AuthContext } from "../../providers/AuthProvider";
import SingleOrder from "./SingleOrder/SingleOrder";
import Swal from "sweetalert2";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `https://car-doctor-server-kohl-phi.vercel.app/checkouts?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  const handleDelete = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://car-doctor-server-kohl-phi.vercel.app/checkouts/${id}`, {
                method: 'DELETE',
            })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
              })
        }
      })
  }

  const handleApprove = id => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://car-doctor-server-kohl-phi.vercel.app/checkouts/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({status: 'Approved'})
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire(
                        'Good job!',
                        'Your file has been updated.',
                        'success'
                    )
                    const remaining = orders.filter(order => order._id !== id);
                    const updated = orders.find(order => order._id === id);
                    updated.status = 'Approved';
                    const newOrders = [updated, ...remaining];
                    setOrders(newOrders);
                }
              })
        }
      })
  }

  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <OrderBanner></OrderBanner>
      <div className="w-max mx-auto grid grid-cols-1">
        {
            orders.map(item => <SingleOrder key={item._id} item={item} handleDelete={handleDelete} handleApprove={handleApprove}></SingleOrder>)
        }
      </div>
    </div>
  );
};

export default Order;