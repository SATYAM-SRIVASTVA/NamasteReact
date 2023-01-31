import { useState, useEffect } from "react";
export const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline=()=>{
        setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener(handleOnline,null);
      window.removeEventListener(handleOffline,null);

    };
  }, []);

  return isOnline;
};
