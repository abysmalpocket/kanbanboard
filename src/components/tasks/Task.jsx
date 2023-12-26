import styles from './Task.module.css';

const Task = ({ title }) => {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
		</div>
	);
};

export default Task;
