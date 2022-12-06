import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import Card from "./CardComponent";

const RenderPosts = () => {
  const [data, setData] = useState([]);
  // console.log("rendering posts");
  useEffect(() => {
    fetch("http://localhost:8080/user")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log("data is ", data);
  return (
    <>
      <div className="cards">
        {data.map((item) => (
          <CardComponent post={item}></CardComponent>
        ))}
      </div>
    </>
  );
};

export default RenderPosts;
