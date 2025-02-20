import { useState } from 'react'
import "./style.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '555-777+'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

const addPerson = (event) =>{ 
event.preventDefault()
const personObject = {
  name: newName,
  id:persons.length+1,
}
// проверка на уникальность
if(!persons.some(i=>i.name === newName)){
setPersons(persons.concat(personObject))
}else{
  alert(`${newName} already in phonebook!`)
}
setNewName('')
}

const handlePersonChange = (event) =>{
 setNewName(event.target.value)
}
const handlePersonPhone = (event) =>{
 setNewPhone(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>


      <form onSubmit={addPerson}>
        <div>
          <p>name:    <input value={newName} onChange={handlePersonChange}/></p>
          <p>number:  <input value={newPhone} onChange={handlePersonPhone}/></p>
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
