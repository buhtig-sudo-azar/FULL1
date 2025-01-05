import { useState } from 'react'

const Button = (props) => {
  const { onclick, text } = props;
  return (
    <>
      <button onClick={onclick}>{text}</button>
    </>
  )
}



import React, { useState } from 'react'; // Импортируем useState из React и стили CSS для нашего приложения
import './App.css';

// Массив с анекдотами
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
];

// Функциональный компонент App
const App = () => {
  // Состояние для выбранного анекдота
  const [selected, setSelected] = useState(0); // Инициализируем selected с значением 0

  // Состояние для подсчета голосов каждого анекдота
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0)); // Создаем массив votes длиной anecdotes.length и заполняем его нулями

  // Функция для увеличения голосов за текущий анекдот
  const vote = (index) => {
    setVotes(prevVotes => { // Используем функцию-обновителя для обновления votes
      const newVotes = [...prevVotes]; // Создаем новую копию votes
      newVotes[index] += 1; // Увеличиваем значение на нужном индексе
      return newVotes; // Возвращаем новую копию votes
    });
  };


  
  /*
  Эта функция отвечает за переключение следующего анекдота. Вот как она работает:
const nextAnecdote = () => { ... }:
Это объявление функции. Она не принимает никаких аргументов и ничего не возвращает.
setSelected(:
Здесь мы используем функцию-обновитель для обновления выбранного состояния.
(prevSelected):
Это параметр функции-обновителя. Он содержит текущее выбранное значение.
=>:
Это стрелочная функция, которая будет выполнена вместо обычных выражений.
(prevSelected + 1):
Мы увеличиваем текущее значение, выбранное на 1.
% anecdotes.length:
Этот оператор модуля (%) используется для возврата к начальному массиву в конце.
Например, если anecdotes.length = 8:
Если prevSelected = 0, (0 + 1) % 8 = 1
Если prevSelected = 7, (7 + 1) % 8 = 0
):
Закрывает выражение внутри функции-обновителя.
):
Закрывает саму функцию-обновителя.
Таким образом, выбрана эта функция обновляется, увеличивая ее на 1 с помощью % для возврата к началу массива в конце. Это обеспечивает циклическое переключение между анекдотами.

Когда мы вызываем эту функцию, она обновляет выбранное состояние, что приводит к перерендерингу компонента с новым анекдотом.
  */
  const nextAnecdote = () => {
    setSelected((prevSelected) => (prevSelected + 1) % anecdotes.length); // Обновляем selected, увеличивая его на 1 и используя % для возврата к началу при достижении конца
  };

  // Версия компонента
  return (
    <div>
      <h1>Anecdote of the day</h1> {/* Заголовок для отображения */}
      <p>{anecdotes[selected]}</p> {/* Отображаем текущий анекдот */}
      <p>Has {votes[selected]} votes</p> {/* Отображаем количество голосов за текущий анекдот */}
      <Button onclick={() => vote(selected)} text="Vote" />
      <Button onclick={() => nextAnecdote(selected)} text="Next anecdote" />
    </div>
  );
};

// Экспорт компонента App
export default App;