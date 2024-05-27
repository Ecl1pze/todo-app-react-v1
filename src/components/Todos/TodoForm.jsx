import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import styles from './TodoForm.module.scss';

export function TodoForm({ addTodo }) {
	const [input, setInput] = useState('');

	function submitHandler(e) {
		e.preventDefault();
		addTodo(input);
		setInput('');
	}

	return (
		<form onSubmit={submitHandler} className={styles.form}>
			<input
				className={styles.input}
				type="text"
				placeholder="Напишите новую задачу"
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
			<button className={styles.button}>
				<BsPlusLg size={30} />
			</button>
		</form>
	);
}
