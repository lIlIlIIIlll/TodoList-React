import { useState } from "react";
import TodoForm from "./TodoForm";
import Task from "./Task";
import {v4} from "uuid"

function TodoWrapper(){
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) =>{
        setTodos(prevTodos =>{
            const newTodos = [...prevTodos,{id:v4(),title:todo,completed:false,isEditing:false}];
            return newTodos;
        });
    }

    const delTodo = (idTodo) =>{
        const newTodos = todos.filter(objeto => objeto.id !== idTodo);
        setTodos(newTodos);
    }

    const editIsEditing = id => {
        setTodos(
            todos.map(
                todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        )
    }

    const editTodo = (todoId,todoTitle) =>{
        let newTodos = [];
        todos.forEach((todo,index)=>{
            if(todo.id === todoId){
                let novoTodo = todo;
                novoTodo.title = todoTitle;
                newTodos.push(novoTodo);
            }else{
                newTodos.push(todo);
            }
        });
        setTodos(newTodos);
    }

    return(
        <div className="TodoWrapper">
            <h2>Faça tudo, hein?!</h2>
            <TodoForm addTodo={addTodo}/>
            <div className="tasks">
                {todos.map((todo,index) =>{
                    return <Task isEditing={todo.isEditing} editIsEditing={editIsEditing} editTodo={editTodo} delTodo={delTodo} id={todo.id} key={index} title={todo.title}/>
                })}
            </div>
        </div>
    );
}

export default TodoWrapper;