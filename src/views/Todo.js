

const Todo = (props) => {
    const { todos, title, deleteDateTodo } = props

    const handleClickDelete = (id) => {
        deleteDateTodo(id)
    }
    return (
        <div className='todos-container'>
            <div>{props.title}</div>
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <li className='todos-child'>{todo.title}	&nbsp;
                            <button type="button" onClick={() => handleClickDelete(todo.id)}>X</button>
                        </li>
                    </div>


                )
            })}
            <hr />
        </div>
    )
}

export default Todo;