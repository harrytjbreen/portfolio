import { useEffect, useState } from "react";

const mobileCutOff = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = () => setIsMobile(window.innerWidth <= mobileCutOff);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
