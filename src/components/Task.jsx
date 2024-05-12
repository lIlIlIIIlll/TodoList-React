import { useState } from "react";

function Task(Props){
    const [fValue,setFValue] = useState(Props.title);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(fValue.trim() !== ""){
            Props.editTodo(Props.id,fValue);
            Props.editIsEditing(Props.id);
        } else{
            Props.editIsEditing(Props.id);
        }
    }

    return(
        <div className="task-div">

            {!Props.isEditing && (
                <h5 onClick={() => Props.editIsEditing(Props.id)} className="task-title">{Props.title}</h5>
            )}
            {Props.isEditing && (
                <form className="task-editing-form" onSubmit={handleSubmit}>
                    <input autoFocus className="task-editing-input" value={fValue} onChange={e =>{setFValue(e.target.value)}} type="text"/>
                </form> 
            )}
            <button onClick={() => Props.delTodo(Props.id)} className="task-delete"></button>
        </div>
    );
}

export default Task;