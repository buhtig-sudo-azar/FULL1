import { useState } from 'react'
import "./style.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const addPerson = (event) =>{
event.preventDefault()
const personObject = {
  name: newName,
  id:persons.length+1,
}
setPersons(persons.concat(personObject))
setNewName('')
}

const handlePersonChange = (event) =>{
 setNewName(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>


      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map(i=><li key={i.id}>{i.name}</li>)}</ul>
    </div>
  )
}

export default App
