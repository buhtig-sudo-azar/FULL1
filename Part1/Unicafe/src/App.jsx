import { useState } from 'react'
const Button = (props) => {
  const { onclick, text } = props;
  return (
    <button onClick={onclick}>{text}</button>
  )
}
const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <>
      <h5>{text}    {value}</h5>
    </>
  )
}
const Statistics = (props) => {
  const { good, neutral, bad, all, avg, pos } = props;

  if (all != 0) {
    return (
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={pos} />
      </>
    )
  } else {
    return (
      <>
        <h4>No feedback geeven</h4>
      </>
    )
  }
}


function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  const all = good + bad + neutral;

  const average = () => {
    if (all == 0) { return 0; }
    return ((good - bad) / all)
  }
  const positive = () => {
    return (good / all) * 100 + "%"
  }

  return (
    <>

      <h1>Geeve feedback</h1>
      <Button onclick={() => setGood(good => good + 1)} text="good" />
      <Button onclick={() => setNeutral(neutral => neutral + 1)} text="neutral" />
      <Button onclick={() => setBad(bad => bad + 1)} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={average()} pos={positive()} />
    </>
  )
}

export default App
