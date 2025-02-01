import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404)
    return (
      <Wrapper>
        <div>
          <img src={img} alt="1" className="img" />
          <h3>This is Wrong!</h3>
          <p>
            This page does not exists! Please go back to
            <Link to="/"> Home Page</Link>
          </p>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div>
        <h3> Something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
