import React from 'react'


const Statistics = (props) => {
  
  const {good, bad, neutral, sum} = props
  
  console.log(sum)
  if (sum == 0) {
    return (
      <div>
        No feedback yet
      </div>
    )
  }
  
return(
      <div>
      <p>
      Good: {good}</p>
      <p>Neutral: {neutral}</p>
       
      Bad: {bad} <br/>
      All: {good + neutral + bad} <br/>
      Average: {(good - bad)/(good + neutral + bad)}
      <br/>
      Positive: {100*good/(good + neutral + bad)} %
      
    </div>
    )
    
}


export default Statistics