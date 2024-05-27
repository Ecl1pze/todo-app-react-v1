import { Todo } from './Todo.jsx';
import styles from './Todos.module.scss';

export function Todos({ todos, deleteTodo }) {
	return (
		<div>
			<div className={styles.count}>Количество задач: {todos.length}</div>
			{!todos.length && (
				<div className={styles.notTodo}>Задачи отсутствуют</div>
			)}
			{todos.map((todo, index) => (
				<Todo key={index} title={todo} index={index} deleteTodo={deleteTodo} />
			))}
		</div>
	);
}
