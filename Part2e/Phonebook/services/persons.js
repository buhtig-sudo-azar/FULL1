import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response =>  response.data)
}

// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

const create = (newObject) => {
  // Добавим случайную ошибку для имитации сбоя сервера
  if (Math.random() < 0.9) { // 30% вероятность ошибки
    return Promise.reject({ message: 'Ошибка сервера: не удалось добавить контакт.' });
  }
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};


const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => { 
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }
