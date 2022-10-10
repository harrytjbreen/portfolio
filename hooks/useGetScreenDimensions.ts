import { useEffect, useState } from "react";

const useGetScreenDimensions = () => {
  const doResize = (e: UIEvent) => {
    setSize([window.innerWidth, window.innerHeight]);
  };

  const [size, setSize] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
    addEventListener("resize", doResize);
  }, []);

  return size;
};

export default useGetScreenDimensions;
