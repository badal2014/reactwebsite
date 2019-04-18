import React, {useState ,useEffect} from 'react';



function ListTodo({todo , index,badal ,complete , edit}){    
    console.log(index);
    return  <div  style={{ textDecoration: todo.isCompleted ? "line-through" : "", width: '405px' }}> {todo.editMe ? <input type="text" /> : `${todo.text}` } 
    
    <button type="button" onClick={(e) => complete(index)}>Completed</button><button type="button" onClick={e => badal(index)}>Delete</button><button type="button" onClick={(e) => edit(index)}>Edit</button>
    </div>
}
function AddToDo({addToDo}){
    const[text , setText] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if(!text.trim())return;
        addToDo(text);
        setText('');
    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/> 
        </form>
    )
}
export default function Badal() {
const[todos , setToDos] = useState([
    {text : "First To do" , isCompleted : false,editMe : false},
    {text : "Second To do" , isCompleted : false,editMe : false}
])
const addToDo = text =>{
    const newToDo = [...todos ,{text}];
    setToDos(newToDo)
}
const deleteToDo = index =>{
    console.log("in delete function");
    
    const newToDo = [...todos]
    newToDo.splice(index, 1);
    setToDos(newToDo);
}
const completeToDo = index =>{
    console.log("in function")
    const newTodo = [...todos];
    newTodo[index].isCompleted = true;
    setToDos(newTodo);
}
const editToDo = index =>{
    const toDo = [...todos]
    console.log(toDo[index].editMe = true)
    setToDos(toDo[index].editMe = true)
}


    return(
        <div>
            {todos.map((todo , index) => <ListTodo todo={todo}  badal={deleteToDo} complete={completeToDo} key={index} index={index} edit={editToDo  }/>)}
            <AddToDo addToDo={addToDo}/>
        </div>
    )
}  