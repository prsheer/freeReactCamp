import React from 'react'

function TodoItem(props) {

    return (
        <div>
            <input
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <h3>To do: {props.item.text}</h3>
            <h3>Completed: {props.item.completed ? "Completed" : "Not completed"}</h3>
            <hr />
        </div>
    )
}

export default TodoItem
