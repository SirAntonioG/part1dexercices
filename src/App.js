import { useState } from 'react'
const Button = ({ onClick, text }) => {
  return (<button onClick={onClick}>
    {text}
  </button>)
}
const Title = ({ text }) => (
  <h2>{text}</h2>
)
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ( good * 1 + neutral * 0 + bad * -1 ) / all;
  return (
    <p>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      all {all}<br />
      average {average}<br />
      positive {100 * good / all} %<br />
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }


  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Title text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
