import { useState } from 'react'
const Button = (props) => {
  const { onclick, text } = props;
  return (
    <button onClick={onclick}>{text}</button>
  )
}
const Display = (props) => {
  const { good, newtral, bad } = props;
  return (
    <>
      <h4>Statistics</h4>
      <p>good {good}</p>
      <p>neutral {newtral}</p>
      <p>bad {bad}</p>
    </>
  )

}
function App() {
  const [good, setGood] = useState(0);
  const [newtral, stNewtral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>

      <h1>Geeve feedback</h1>
      <Button onclick={() => setGood(good + 1)} text="good" />
      <Button onclick={() => stNewtral(newtral + 1)} text="newtral" />
      <Button onclick={() => setBad(bad + 1)} text="bad" />

      <Display good={good} newtral={newtral} bad={bad} />
    </>
  )
}

export default App
