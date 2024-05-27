import { CgNotes } from 'react-icons/cg';
import styles from './Todo.module.scss';

export function Todo({ title, index, deleteTodo }) {
	return (
		<div
			onDoubleClick={() => deleteTodo(index)}
			title="Двойное нажатие для завершения задачи"
			className={styles.todo}
		>
			<CgNotes size={30} />
			{title}
		</div>
	);
}
