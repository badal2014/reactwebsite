import React, { useState , useEffect} from 'react';


export function Example() {    
    const [count , setCount] = useState(0);
    const[apple , setApple] = useState(0);
    useEffect(() =>{
      document.title = `You have clicked ${count} times`
    })
      async function badal(){
      setCount(count+1);
      setApple(apple+1)
    }
    return(
    <div>
      <p>you have clicked {count} times</p>
      <button type="button" onClick={() =>setCount(count+1)}>
      Click ME
      </button>
      <p>Apple {apple}</p>
      <button type="button" onClick={badal}>Update Apple</button>
    </div>

    );
      
  }

export function FriendStatus() {
    const [data, setData] = useState([]);
    async function getData() {
    console.log('ddddd');

    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const data = await response.json();
    setData(data[1].title);
  }
  useEffect(() => {
    console.log('ddddd');
    getData();
  });
  return data;
}

function ListTodo({ todo, index, completeTodo, deleteTodo }) {
  return <div className="listDiv"><div style={{ textDecoration: todo.isCompleted ? "line-through" : "", width: '205px' }} >{todo.text}</div><button className="btn" onClick={e => completeTodo(index)} >Completed</button>&nbsp;<div style={{ cursor: 'pointer' }} onClick={e => deleteTodo(index)} >  x </div></div>;
}

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');
  const submitTodo = e => {
    if(!text.trim())return;
    e.preventDefault();
    addTodo(text);
    setText('');
  }
  return <form onSubmit={e => submitTodo(e)}><input className="input" placeholder="Add Todo...." type="text" value={text} onChange={e => setText(e.target.value)} /></form>;
}

export default function App() {
  const [todos, setTodo] = useState([
    { text: "First todo", isCompleted: false }
  ]);
  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodo(newTodo);
  }
  const completeTodo = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setTodo(newTodo);
  }
  const deleteTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }
  return (
    <div>
      {todos.map((todo, index) => <ListTodo deleteTodo={deleteTodo} completeTodo={completeTodo} key={index} todo={todo} index={index} />)}
      <AddTodo addTodo={addTodo} />
    </div>
  )
}