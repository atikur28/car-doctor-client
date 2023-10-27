import { useRouteError } from "react-router-dom";
import NavbarTwo from "../SharedPages/NavbarTwo/NavbarTwo";
import Footer from "../SharedPages/Footer/Footer";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <div className="text-center my-10 md:my-40 space-y-4">
        <h1 className="text-4xl font-semibold">Oops!!!..</h1>
        <p className="text-lg font-medium">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="font-semibold">
          <i>404 {error.statusText || error.message}!!</i>
        </p>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
