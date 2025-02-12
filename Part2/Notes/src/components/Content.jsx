import Part  from "./Part";

const Content = (props) => {
    const { parts } = props;
  
    return (
      <>
  
        {parts.map(i =>
          <p key={Math.random()}>  <Part name={i.name} exercises={i.exercises} /></p>
  
        )
  
        }
  
      </>
    )
  
  }

  export default Content;