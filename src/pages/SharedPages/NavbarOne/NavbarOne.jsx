import { Link, NavLink } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import navLogo from "../../../assets/logo.svg";

const NavbarOne = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Blog
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
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
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="w-12 md:w-16 normal-case text-xl">
          <img src={navLogo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-5 font-semibold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-2 lg:gap-4">
          <BsHandbag className="text-xl"></BsHandbag>
          <BsSearch className="text-xl"></BsSearch>
          <Link>
            <button className="btn btn-outline text-[#FF3811] md:font-bold border-[#FF3811] hover:border-[#FF3811] hover:bg-[#FF3811]">
              Appointment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
