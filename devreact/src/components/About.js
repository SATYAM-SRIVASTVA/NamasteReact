import { Outlet } from "react-router-dom";
import './About.css'
const About = () => {
  return (
    <>
      <h1>This is About Us page</h1>
      <Outlet />
    </>
  );
};
export default About;
