import { useState } from 'react'
const Button = (props) => {
  const { onclick, text } = props;
  return (
    <button onClick={onclick}>{text}</button>
  )
}
const Display = (props) => {
  const { good, neutral, bad, all, avg, pos } = props;
  return (
    <>
      <h4>Statistics</h4>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>


      <p>average {avg}</p>
      <p>positive {pos}</p>
    </>
  )

}


function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  const all = good + bad + neutral;

  const average = () => {
    if (all == 0) return 0;
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

      <Display good={good} neutral={neutral} bad={bad} all={good + bad + neutral} avg={average()} pos={positive()} />
    </>
  )
}

export default App
