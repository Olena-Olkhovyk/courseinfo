import Header from "./part1/courseinfo/Header";
import Content from "./part1/courseinfo/Content";
import Total from "./part1/courseinfo/Total";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const totalExercises =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;
  return (
    <div>
      <Header name={course} />
      <Content course={course} />

      <Total total={totalExercises} />
    </div>
  );
};

export default App;
