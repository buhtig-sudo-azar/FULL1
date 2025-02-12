const Note = (props) => {
    const {note} = props;
    // console.log(props)
    return (
      <>
        <p>{note.content}</p>
      </>
    )
  }

  export default Note;