import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = () => {
    const parts = [
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
  return (
    <div>
        <Part part={parts[0].name} exercise={parts[0].exercises}/>
        <Part part={parts[1].name} exercise={parts[1].exercises}/>
        <Part part={parts[2].name} exercise={parts[2].exercises}/>
        <Total sum={parts[0].exercises + parts[1].exercises +  parts[2].exercises} />
     </div>
  )
}

export default Content
