import React, {useState} from 'react'
import Header from './Header'
import Content from './Content'


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
      
      Good: {good}
      <br />
      Neutral: {neutral} <br/>
      Bad: {bad}
      
    </div>
  )
}

export default App