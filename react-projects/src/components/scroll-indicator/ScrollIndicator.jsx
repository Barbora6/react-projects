import { useState } from "react";
import "./ScrollIndicator.css";
import { useEffect } from "react";

export const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return <div></div>;
};
