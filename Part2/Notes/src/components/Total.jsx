const Total = (props) => {
  const { parts } = props;
  return (
    <>
      <h3>Total of {
        parts.reduce((acc, c) => acc + c.exercises, 0)
      } exercises</h3>

    </>
  )

}


export default Total;