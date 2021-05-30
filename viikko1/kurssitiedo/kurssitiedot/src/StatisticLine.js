import React from 'react'


const StatisticLine = (props) => {
  
  console.log(props, "StatisticLine")
  
return(
      <div>
      {props.text}: {props.value} {props.text2}
    </div>
    )
    
}


export default StatisticLine