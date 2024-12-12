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
      <p>{props.name}  {props.exercises}</p>
    </>
  )
}

const Content = (props) => {

  return (
    <>
      <Part name={props.name} exercises={props.exercises} />
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} />
    </>
  )
}

export default App