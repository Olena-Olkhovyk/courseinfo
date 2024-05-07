import React from "react";

const Part = (props) => {
  console.log(props);
  return <div>{<p>{props.part.name}</p>}</div>;
};

export default Part;
