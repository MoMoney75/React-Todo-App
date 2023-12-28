const Todo = ({task, handleRemove}) =>{
    const remove = ()=>handleRemove()
    return(
        <div>
            {task}
            <button onClick={remove}>x</button>
        </div>
    )
}

export default Todo;
