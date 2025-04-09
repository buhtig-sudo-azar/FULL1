import { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import personService from '../services/persons';
import Notification from './components/Notification';
import { v4 as uuidv4 } from 'uuid';

const Filter = (props) => {
  const { value, onChange } = props;
  return <>filter: <input value={value} onChange={onChange}></input></>;
};

const PersonForm = (props) => {
  const { onSubmit, nameValue, phoneValue, onNameChange, onPhoneChange } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <p>
            name: <input value={nameValue} onChange={onNameChange} />
          </p>
          <p>
            number: <input value={phoneValue} onChange={onPhoneChange} />
          </p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const Persons = (props) => {
  const { filteredPersons, onDelete } = props;
  return (
    <>
      <ul>
        {filteredPersons.map((i) => (
          <li key={i.id}>
            {i.name} {i.number}
            <button onClick={() => onDelete(i.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newPhone,
      id: uuidv4(), // Генерируем уникальный id,
    };

    if (!newName || !newPhone) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }

    if (persons.some((i) => i.name === newName)) {
      alert(`${newName} name already in phonebook!`);
      return;
    }

    if (persons.some((i) => i.number == newPhone)) {
      alert(`${newPhone} phone already in phonebook!`);
      return;
    }

    personService.create(personObject).then((returnedNote) => {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPhone('');
      setNotificationMessage(`Added ${newName}`);
      setNotificationType('success');
      setTimeout(() => {
        setNotificationMessage(null);
        setNotificationType(null);
      }, 3000);
    }).catch((error) => {
      setNotificationMessage(`Not added ${newName}`);
      setNotificationType('error');
      setTimeout(() => {
        setNotificationMessage(null);
        setNotificationType(null);
      }, 3000);
    });
  };

  const deletePerson = (id) => {
    if (window.confirm(`Delete contact ${id}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setNotificationMessage('Контакт успешно удален!')
          setNotificationType('success');
          setTimeout(() => {
            setNotificationMessage(null);
            setNotificationType(null);
          }, 3000);
        }).catch((error) => {
          setNotificationMessage(`Not deleted ${newName}`);
          setNotificationType('error');
          setTimeout(() => {
            setNotificationMessage(null);
            setNotificationType(null);
          }, 3000);
        });
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePersonPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const response = await axios.get('http://localhost:3001/persons');
        console.log('Data from server:', response.data); // Добавлено
        setPersons(response.data);
      } catch (error) {
        console.error('Error fetching persons:', error);
      }
    };

    fetchPersons();
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={(event) => setFilter(event.target.value)} />
      <h2>Add a new</h2>
      <Notification message={notificationMessage} type={notificationType} />
      <PersonForm
        onSubmit={addPerson}
        nameValue={newName}
        phoneValue={newPhone}
        onNameChange={(event) => setNewName(event.target.value)}
        onPhoneChange={(event) => setNewPhone(event.target.value)}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} onDelete={deletePerson} />
    </div>
  );
};

export default App;