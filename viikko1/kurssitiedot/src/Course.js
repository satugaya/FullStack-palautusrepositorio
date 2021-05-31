import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
    console.log(props)
    
  return (
    <div>
      {props.course} 
      <Header />
      <Content />
     </div>
  )
}

export default Course