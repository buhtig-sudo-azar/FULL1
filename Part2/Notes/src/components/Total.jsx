const Total = (props) => {
  const { parts } = props;
  return (
    <>
     Total of {
        parts.reduce((acc, c) => acc + c.exercises, 0)
      } exercises

    </>
  )

}


export default Total;