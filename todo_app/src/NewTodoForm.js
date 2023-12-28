import React from "react"
import {useState} from "react"

const TodoForm = function({onFormSubmit}){
const [formData, setFormData] = useState({todo : ""})

const handleChange = (e)=>{
    //SAME AS name = e.target.name, value = e.target.value
   const {name,value} = e.target

    setFormData((existingList) =>({
        ...existingList, [name]: value
    }))
}

const handleSubmit = (e) =>{
e.preventDefault()
onFormSubmit(formData)
setFormData({todo : ""})

}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">todo:</label>
                <input 
                id="todo"
                name="todo" 
                type="text" 
                value={formData.todo} 
                placeholder="enter task" 
                onChange={handleChange} />

                <button>submit</button>
            </form>
        </div>
    )
}

export default TodoForm;