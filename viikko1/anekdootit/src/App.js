import React, {useState} from 'react'
import Header from './Header'

  

  
  
let points = new Array(6+1).join('0').split('').map(parseFloat)
const copy = [...points] 



const App = () => {
  
  const quotes = 'Quotes'
  
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

  
  const best = 'Anecdote with most votes'
  
  let max = Math.max(...copy);
  
  
  console.log(max, "max")
  
  const maxVoted = copy.findIndex((x) => x == max)
  
  const addVote = () => {
    setVote(copy[selected] += 1)
    
  }
 
  

  return (
    <div>
      
      <Header course={quotes} />
      {anecdotes[selected]}
      <br/>
      
      has {copy[selected]} votes 
      
      <button onClick={addVote}>Äänestä tästä</button>
      
      <button onClick={randomQuote}>Paina tästä uusi ajatus</button>     
      <br />
      <br/>
      <Header course={best} />
      {max > 1 ? <p>has {max} votes<br/>{anecdotes[maxVoted]}</p> : <p>Ei vielä tuloksia.</p>}
      

      
      
    </div>
  )
}


export default App