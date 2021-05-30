import React, {useState} from 'react'
import Header from './Header'
import Content from './Content'
import Statistics from './Statistics'
  

  
  
let points = new Array(6+1).join('0').split('').map(parseFloat)
const copy = [...points] 

const App = () => {
  const course = 'Half Stack application development'

  const unicafe = 'Give Feedback'
  const statistics = 'Statistics'
  const quotes = 'Quotes'
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const sum = good + bad + neutral

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
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)

  const randomQuote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const addVote = () => {
    setVote(copy[selected] += 1)
    
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
      
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}/>
      <br/>
      <Header course={quotes} />
      {anecdotes[selected]}
      <br/>
      
      {copy[selected]} copy
      
      <button onClick={addVote}>Äänestä tästä</button>
      
      <button onClick={randomQuote}>Paina tästä uusi ajatus</button>
      
      <br />
      
      
    </div>
  )
}


export default App