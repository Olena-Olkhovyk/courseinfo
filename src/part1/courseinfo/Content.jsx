import React from "react";
import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <Part part1={props.part1} exer1={props.exer1} />
      <Part part2={props.part2} exer2={props.exer2} />
      <Part part3={props.part3} exer3={props.exer3} />
    </>
  );
};

export default Content;
