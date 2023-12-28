import React from "react"
import {useState} from "react" 
import Todo from "./Todo";
import TodoForm from "./NewTodoForm";



const TodoList = function(){

    const [list, setList] = useState([])
    const handleFormSubmit = (formData) =>{
        setList((existingList) =>[...existingList,formData])
    }

    const remove = (key) =>{
        setList(list.filter((task,i) => i !== key ))

    }

    return(
        <div>
            <TodoForm onFormSubmit={handleFormSubmit}/>
        <ol>
        {list.map((task,index) =>(
                
                <li key={index} >
                <Todo 
                task={task.todo}
                handleRemove={()=>remove(index)}
                />
            </li>
        ))}


        </ol>

        </div>
    )
}

export default TodoList;