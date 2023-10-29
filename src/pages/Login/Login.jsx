import NavbarTwo from "../SharedPages/NavbarTwo/NavbarTwo";
import log from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/bx_bxl-facebook.svg";
import linkedin from "../../assets/images/login/bx_bxl-linkedin.svg";
import google from "../../assets/images/login/google 1.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const { login, loginInWithGoogle } = useContext(AuthContext);
  
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoginError("");

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = {email};
        form.reset();
        Swal.fire("Good job!", "You clicked the button!", "success");
        axios.post('https://car-doctor-server-kohl-phi.vercel.app/jwt', user, {withCredentials: true})
          .then(res => {
            if(res.data.success){
              navigate(location?.state ? location?.state : "/");
            }
          })
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "You have successfully logged in..", "success");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:w-1/2">
            <img src={log} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 border rounded-xl lg:px-10">
            <h1 className="text-3xl text-center font-semibold mt-10">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                  Sign In
                </button>
              </div>
            </form>
            {loginError && (
              <p className="text-red-600 font-semibold text-center">
                {loginError}
              </p>
            )}
            <div className="mb-5">
              <h6 className="text-[#737373] text-center font-bold">
                Or Sign In with
              </h6>
              <div className="flex items-center gap-3 w-max mx-auto mt-2">
                <Link>
                  <button>
                    <img
                      className="bg-gray-200 rounded-full p-0.5"
                      src={facebook}
                      alt=""
                    />
                  </button>
                </Link>
                <Link>
                  <button>
                    <img
                      className="bg-gray-200 rounded-full p-1.5"
                      src={linkedin}
                      alt=""
                    />
                  </button>
                </Link>
                <Link>
                  <button onClick={handleGoogleLogin}>
                    <img
                      className="bg-gray-200 rounded-full p-2"
                      src={google}
                      alt=""
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <p className="text-[#737373] font-semibold text-center">
                Have an account?{" "}
                <Link to="/signup">
                  <span className="text-[#FF3811]">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
