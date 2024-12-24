import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}


const Button = ({ handleClick, text }) => {

  return (
    <>
      < button onClick={handleClick} >
        {text}
      </button >
    </>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [total, setTotal] = useState(0);
  const [allClicks, setAll] = useState([])
  const [some, setSome] = useState({
    x: 0,
    y: 0,
  })
  const [value, setValue] = useState(12);


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  const reset = () => {

    setLeft(0);
    setRight(0);
    setAll([])
  }
  const someHeadlerX = () => {
    setSome(
      {

        ...some,
        x: some.x + 1,
      }
    )

  }
  const someHeadlerY = () => {
    setSome(
      {
        ...some,
        y: some.y + 1,

      }
    )

  }
  // console.log("someX ", some.x)
  // console.log("someY " + some.y)

  const Display = (props) => {
    const { value } = props;
    return (
      <>
        <p>setToValue: {value}</p><br />
      </>
    )
  }

  const setToValue = (arg) => setValue(arg);
  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        <Button handleClick={reset} text='reset' />

        {right}
        <History allClicks={allClicks} />

        <h4>Example of setToValue handler  </h4>
        <input type="text" value={value} onChange={(e) => setToValue(e.target.value)} />
        <Display value={value} />

        <Button handleClick={someHeadlerX} text="someX" />
        <Button handleClick={someHeadlerY} text="someY" />
        <p>some X{some.x}</p>
        <p>some Y{some.y}</p>
      </div>
    </div>
  )
}
export default App;