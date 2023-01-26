import { useRouteError } from "react-router-dom";
import './Error.css'
const Error = () => {

  const err = useRouteError();  
  console.log(err)
  const{status,statusText}=err;
  return (
    <>
      <h1>Oops..!!</h1>
      <h2>Something went wrong</h2>
      <h2>{status+":"+statusText}</h2>
    </>
  );
};
export default Error;