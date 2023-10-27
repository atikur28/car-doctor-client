import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import facebook from "../../assets/images/login/bx_bxl-facebook.svg";
import linkedin from "../../assets/images/login/bx_bxl-linkedin.svg";
import google from "../../assets/images/login/google 1.svg";
import NavbarTwo from "../SharedPages/NavbarTwo/NavbarTwo";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");

  const { createUser, loginInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setSignUpError("");

    if (password.length < 6) {
      setSignUpError("Password should be in 6 character!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSignUpError(
        "Your password should have at least one upper case character!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setSignUpError(
        "Your password should have at least one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        updateProfile(result.user, {
          displayName: name
        })
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire("Good job!", "You have been registered..", "success");
        navigate("/");
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire(
            "Good job!",
            'You have successfully logged in..',
            'success'
        );
        navigate('/');
      })
      .catch(error => {
        setSignUpError(error.message);
      })
  }

  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <div className="text-center lg:w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 border rounded-xl lg:px-10">
            <h1 className="text-3xl text-center font-semibold mt-10">
              Sign Up
            </h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] hover:bg-[#FF3811] text-white">
                  Sign Up
                </button>
              </div>
            </form>
            {signUpError && (
              <p className="text-red-600 font-semibold text-center">
                {signUpError}
              </p>
            )}
            <div className="mb-5">
              <h6 className="text-[#737373] text-center font-bold">
                Or Sign Up with
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
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-[#FF3811]">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
