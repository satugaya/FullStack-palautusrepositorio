import React from 'react'
import StatisticLine from './StatisticLine'


const Statistics = (props) => {
  
  const {good, bad, neutral, sum} = props
  
  console.log(sum)
  if (sum === 0) {
    return (
      <div>
        No feedback yet
      </div>
    )
  }
  
return(
      <div>
        <table>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={sum} />
          <StatisticLine text="Average" value={(good - bad)/sum} />
          <StatisticLine text="Positive" value={100*(good/sum)} text2=" %"  />
       
      
        </table>
        
    </div>
    )
    
}


export default Statistics