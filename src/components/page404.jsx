import { Link } from "react-router-dom";
const page404 = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <h3>This URL is not correct </h3>
      <Link to="/ ">Home Page</Link>
    </>
  );
};

export default page404;
