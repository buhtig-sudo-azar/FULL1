const Header = (props) => {
return (
      <>
        <h3> {props.course}</h3>
      </>
    )
  }
  
  const Part = (props) => {
    return (
      <>
        {props.name}
      </>
    )
  }

  export default Header;