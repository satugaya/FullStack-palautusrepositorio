import React from 'react'
import Header from './Header'
import Content from './Content'


const App = () => {
  const course = 'Half Stack application development'
  
  

  return (
    <div>
      <Header course ={course} />
      <Content  />
      
      
      
    </div>
  )
}

export default App