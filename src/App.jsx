import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/Header.jsx';
import { TodoForm } from './components/Todos/TodoForm.jsx';
import { Todos } from './components/Todos/Todos.jsx';

function App() {
	const [todos, setTodos] = useState([]);

	function addTodoHandler(text) {
		setTodos([...todos, text]);
	}

	function deleteTodoHandler(index) {
		setTodos(todos.filter((todo, idx) => idx !== index));
	}

	return (
		<div className="container">
			<Header />
			<TodoForm addTodo={addTodoHandler} />
			<Todos todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	);
}

export default App;
