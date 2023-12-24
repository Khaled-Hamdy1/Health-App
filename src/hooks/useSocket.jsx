import { useEffect } from "react";
import { useState } from "react";
import { socket } from "../Main";

export const useSocket = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("data", (data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return data;
};
