import React, {useState} from 'react'
import Header from './Header'
import Content from './Content'

const Statistics = (props) => {
  console.log(props)
  const {good, bad, neutral} = props
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
  
  


const App = () => {
  const course = 'Half Stack application development'

  const unicafe = 'Give Feedback'
  const statistics = 'Statistics'
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('good')
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    console.log('neutral')
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    console.log('bad')
    setBad(bad + 1)
  }
  

  return (
    <div>
      <Header course ={course} />
      <Content  />
      <Header course = {unicafe} />
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <br />
      <br />
      <Header course ={statistics} />
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App