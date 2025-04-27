import { useState, useEffect } from 'react'
import './App.css'
import * as countriesServ from "../services/countriesService"

function App() {
  const [countries, setCountries] = useState([])
const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
  countriesServ.getAll().then(initialCountries => {
    setCountries(initialCountries); 
})
}, []); // <-- С ПУСТЫМ массивом зависимостей

const searchHandlerCountry =(event)=>{
setSearchTerm(event.target.value)
}

const countriesToShow = searchTerm
    ? countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) // <-- Скобка здесь
    : countries;
  return (
    <>
    <span>find countries: <input value={searchTerm} onChange={searchHandlerCountry} /></span>
       <ul>
      {countriesToShow.map(country => (
         // ??? Напиши код для <li> здесь ???
       <li key={country.cca3}>{country.name.common}</li>
      ))}
    </ul>
    </>
  )
}

export default App
