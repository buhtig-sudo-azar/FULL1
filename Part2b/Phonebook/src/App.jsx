import { useState } from 'react'
import "./style.css"
const Filter = (props) =>{
  const {value, onChange} = props;
  return(
    <>
    filter: <input value={value} onChange={onChange}></input>
    
    </>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '555-777+',
      id:'1',
     }
  ]) 
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('');

 // Проверка на уникальность и заполнение всех полей
const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    if (!newName || !newPhone) {
      alert('Пожалуйста, заполните все поля!');
    return;
    }
    // проверка на уникальность
    if (persons.some(i => i.name === newName)) {
      alert(`${newName} name already in phonebook!`)
     
    }
    if (persons.some(i => i.number == newPhone)) {
      alert(`${newPhone} phone already in phonebook!`)
      return;
    }
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePersonPhone = (event) => {
    setNewPhone(event.target.value)
  }
 // Фильтрация контактов по имени
 const filteredPersons = persons.filter(person =>
  person.name.toLowerCase().includes(filter.toLowerCase())
);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(event)=>setFilter(event.target.value)}/>
    
      <h4>Add a new</h4>
      <form onSubmit={addPerson}>
        <div>
          <p>name:    <input value={newName} onChange={(event)=>setNewName(event.target.value)} /></p>
          <p>number:  <input value={newPhone} onChange={(event)=>setNewPhone(event.target.value)} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{filteredPersons.map(i => (
        <li key={i.id}>
          {i.name} {i.number}
        </li>)
      )
      }
      </ul>
    </div>
  )
}

export default App
