import { useState } from "react";

function TodoForm(props){
    const [valor, setarValor] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(valor !== "" && valor.trim() !== ""){
            props.addTodo(valor);
            setarValor("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="todoF">
            <input value={valor} onChange={(e) => setarValor(e.target.value)} placeholder="Digite o nome da tarefa." className="todo-input" type="text"/>
            <button type="submit" className="todo-btn">+</button>
        </form>
    );
}

export default TodoForm;