import React from 'react'

const Part = (props) => {
    console.log(props)
    
  return (
    <div>
      {props.part}{props.exercise} 
      
     </div>
  )
}

export default Part