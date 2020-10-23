import React, { ChangeEvent, FormEvent, useState } from "react";

export interface InputProps {
    addTodo: AddTodo;
}


export const Input: React.FunctionComponent<InputProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
    };

    return (
        <form >
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>Add</button>
        </form>
    )
}