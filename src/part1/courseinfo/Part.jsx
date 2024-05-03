import React from "react";

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exer1}
      </p>
      <p>
        {props.part2} {props.exer2}
      </p>
      <p>
        {props.part3} {props.exer3}
      </p>
    </div>
  );
};

export default Part;
