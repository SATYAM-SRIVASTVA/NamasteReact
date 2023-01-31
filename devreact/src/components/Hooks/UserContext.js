import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Satyam",
    email: "satyam@gmail.com",
  },
});

UserContext.displayName = UserContext;
export default UserContext;
