import React from 'react'

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
    <div>
      <Header course={course.name} />
      <Content parts ={course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App


const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return(
    <>
      <Part part={Props.parts[0].name} exercise={Props.parts[0].exercises1} />
      <Part part={Props.parts[1].name} exercise={Props.parts[1].exercises2}/>
      <Part part={Props.parts[2].name} exercise={Props.parts[2].exercises3}/>
    </>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  return (
    <p>Number of exercises {Props.parts[0].exercises1 + Props.parts[1].exercises2 + Props.parts[2].exercises3}</p>
  )
}