import { useState,useContext } from "react";
import UserContext from "./Hooks/UserContext";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div style={{ border: "solid black 1px", padding: 5, margin: 10 }}>
      <h2>{title}</h2>
      {isVisible ? (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("About");
  const {user}=useContext(UserContext);
  return (
    <>
      <h1>Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="About"}
        setIsVisible={() => {
          setIsVisibleSection("About")
        }}
      />
      <Section
        title={"Details Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="Details"}
        setIsVisible={() => {
          setIsVisibleSection("Details")
        }}
      />
      <Section
        title={"Careers in Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
        }
        isVisible={visibleSection==="Careers"}
        setIsVisible={() => {
           setIsVisibleSection("Careers")
        }}
      />
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </>
  );
};
export default Instamart;
