import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import {createStore} from "redux";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const reducer = (state=[], action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, {text:action.text, id: Date.now()}];
//     case DELETE_TODO:
//       return state.filter(todo => todo.id!=action.id);
//     default:
//       return [];
//   }
// }
// const addTodo = (text) => {
//   store.dispatch({type : ADD_TODO, text});
// }
// const deleteTodo = (e) => {
//   store.dispatch({type : DELETE_TODO, id : e.target.parentNode.id});
// }
// const store = createStore(reducer);

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = '';
//   toDos.forEach(todo => {
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     btn.innerText = "DEL";
//     btn.addEventListener("click", deleteTodo);
//     li.id = todo.id;
//     li.innerText = todo.text;
//     li.appendChild(btn);
//     ul.appendChild(li)
//   })
// }
// store.subscribe(paintToDos)

// const onSubmit = (e) => {
//   e.preventDefault();
//   const todo = input.value;
//   input.value = "";
//   addTodo(todo)
  
// }

// form.addEventListener("submit", onSubmit)