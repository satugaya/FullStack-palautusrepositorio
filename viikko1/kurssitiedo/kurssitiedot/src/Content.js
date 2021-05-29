import React from 'react'
import Part from './Part'
import Total from './Total'

const Content = (props) => {
    const exercises1 = 10
  
  const exercises2 = 7
  
  const exercises3 = 14

  return (
    <div>
        <Part part='Fundamentals of React ' exercise={exercises1}/>
        <Part part='Using props to pass data ' exercise={exercises2}/>
        <Part part='State of a component ' exercise={exercises3}/>
        <Total sum={exercises1 + exercises2 + exercises3} />
     </div>
  )
}

export default Content
