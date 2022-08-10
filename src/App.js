import { useState } from 'react'

// Comentado para resolver ejercicios 1.12 - 1.14
// const Button = ({ onClick, text }) => {
//   return (<button onClick={onClick}>
//     {text}
//   </button>)
// }
// const Title = ({ text }) => (
//   <h2>{text}</h2>
// )
// const StatisticLine = ({ text, value }) => (
//   <tr>
//     <td>{text}</td>
//     <td>{value}</td>
//   </tr>
// )
// const Statistics = ({ good, neutral, bad }) => {
//   const all = good + neutral + bad
//   const average = ( good * 1 + neutral * 0 + bad * -1 ) / all;
//   const positive = (100 * good / all) + " %";
//   if ( all === 0 ) {
//     return (
//       <p>No feedback given</p>
//     )
//   } else {
//     return (
//       <table>
//         <tbody>
//           <StatisticLine text="good " value={good}/>
//           <StatisticLine text="neutral " value={neutral}/>
//           <StatisticLine text="bad " value={bad}/>
//           <StatisticLine text="all " value={all}/>
//           <StatisticLine text="average " value={average}/>
//           <StatisticLine text="positive " value={positive} />
//         </tbody>
//       </table>
//     )
//   }
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   const handleGoodClick = () => {
//     setGood(good + 1);
//   }
//   const handleNeutralClick = () => {
//     setNeutral(neutral + 1);
//   }
//   const handleBadClick = () => {
//     setBad(bad + 1);
//   }


//   return (
//     <div>
//       <Title text="give feedback" />
//       <Button onClick={handleGoodClick} text="good" />
//       <Button onClick={handleNeutralClick} text="neutral" />
//       <Button onClick={handleBadClick} text="bad" />
//       <Title text="statistics" />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }


// Aqui comienza ejercicios 1.12 - 1.14
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Votes = ({votes}) => {
  return (
    <p>has {votes} votes <br /></p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // funcion que devuelve numero random entre min y max sin incluir max
  const getRandomInt = (min, max) => { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  const points = new Uint8Array(anecdotes.length);
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

  const handleNextAnecdoteClick = () => {
    setSelected(getRandomInt(0,anecdotes.length))
  }
  
  const handleVoteClick = () => {
    const votesAux = [...votes];
    const voteAux=votesAux[selected]+1;
    votesAux[selected] = voteAux;
    setVotes(votesAux)
  }

  const mostVoted = votes.findIndex((element) => {
    const maxValue = Math.max(...votes);
    if (element === maxValue) {
      return true
    } else {
      return false
    }
  })

  console.log("mostVoted",mostVoted)
  
  return (
    <div>
      Anecdota# {selected} <br />
      {anecdotes[selected]} <br />
      <Votes votes={votes[selected]}/>
      <Button onClick={handleVoteClick} text="vote" />
      <Button onClick={handleNextAnecdoteClick} text="next anecdote" />
      <div>Anecdota# {mostVoted}</div>
      <div>Most voted anecdote is {anecdotes[mostVoted]} </div>
      <div>Votos {votes[mostVoted]} votos</div>
    </div>
  )
}

export default App
