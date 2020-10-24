import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { TodoList } from './components/TodoList';


const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Walk the cat", complete: false }

];




const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo == selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const AddTodo: AddTodo = newTodo => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  }
  const renderTodos = () => todos.map(todo => <TodoList todo={todo} toggleTodo={toggleTodo} />)

  return (
    <React.Fragment>
      {renderTodos()}
      <Input addTodo={AddTodo} />
    </React.Fragment>

  );



}

export default App;
