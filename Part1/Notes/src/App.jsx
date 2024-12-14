import React from "react";
const Header = (props) => {

  return (
    <>
      <h3> {props.course}</h3>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      {props.name}
    </>
  )
}
const Total = (props) => {
  const { parts } = props;
  return (
    <>
      {
        parts.map(i =>
          <p key={Math.random()}>{i.exercises} </p>
        )
      }

    </>
  )

}

const Content = (props) => {
  const { parts } = props;

  return (
    <>

      {parts.map(i =>
        <p key={Math.random()}>  <Part name={i.name} /></p>

      )

      }

    </>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App