import { useState, useEffect } from 'react'
import "./style.css"
import axios from 'axios'


const Filter = (props) => {
  const { value, onChange } = props;
  return (
    <>filter: <input value={value} onChange={onChange}></input></>
  )
}
const PersonForm = (props) => {
  const { onSubmit, nameValue, phoneValue, onNameChange, onPhoneChange } = props;

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <p>name:    <input value={nameValue} onChange={onNameChange} /></p>
          <p>number:  <input value={phoneValue} onChange={onPhoneChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}
const Persons = (props) => {
  const { filteredPersons } = props;
  return (
    <>
      <ul>{filteredPersons.map(i => (
        <li key={i.id}>
          {/* console.log(i.persons.id) */}
          {i.name} {i.number}
        </li>)
      )
      }
      </ul>
    </>
  )
}
const App = () => {
  
  // const [persons, setPersons] = useState([
  //   { name: 'Arto Hellas', number: '040-123456', id: 1 },
  //   { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  //   { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  // ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('');


   
  const [persons, setPersons] = useState([])

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get("http://localhost:3001/persons");
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };
    
    fetchPersons();
  }, []);
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    }
    // Проверка на  заполнение всех полей
    if (!newName || !newPhone) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }
    // проверки на уникальность
    if (persons.some(i => i.name === newName)) {
      alert(`${newName} name already in phonebook!`)

    }
    if (persons.some(i => i.number == newPhone)) {
      alert(`${newPhone} phone already in phonebook!`)
      return;
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePersonPhone = (event) => {
    setNewPhone(event.target.value)
  }

  // Фильтрация контактов по имени
  //  const filteredPersons = persons.filter(person =>
  //   person.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // Фильтрация контактов по начальным символам имени
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(event) => setFilter(event.target.value)} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} nameValue={newName}
        phoneValue={newPhone}
        onNameChange={(event) => setNewName(event.target.value)}
        onPhoneChange={(event) => setNewPhone(event.target.value)}
      />

      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
