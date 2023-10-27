import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavbarTwo = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/order"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Order
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/review"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Order Review
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/inventory"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Manage Inventory
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500" : ""
            }
          >
            Login
          </NavLink>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar lg:px-10">
      <div className="flex-1">
        <Link to="/" className="w-12 md:w-16 normal-case text-xl">
          <img src="./src/assets/logo.svg" alt="" />
        </Link>
      </div>
      <div className="flex-none lg:hidden dropdown dropdown-end">
        <label tabIndex={0} className="avatar">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {navLinks}
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 font-semibold">{navLinks}</ul>
      </div>
    </div>
  );
};

export default NavbarTwo;
