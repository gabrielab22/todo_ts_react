import React from "react";


export interface TodoProps {
    todo: Todo;
    toggleTodo: ToggleTodo;

}

export const TodoList: React.FunctionComponent<TodoProps> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                />
                {todo.text}
            </label>

        </li>
        //complete ? <p>{text}</p> : null

    )
}