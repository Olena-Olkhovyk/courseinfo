import Header from "./part1/courseinfo/Header";
import Content from "./part1/courseinfo/Content";
import Total from "./part1/courseinfo/Total";
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header name={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exer1={exercises1}
        exer2={exercises2}
        exer3={exercises3}
      />

      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
