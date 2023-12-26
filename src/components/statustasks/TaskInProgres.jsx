import Task from '../tasks/Task';
import styles from './StatusTask.module.css';

const TaskInProgres = ({ arrayTask }) => {
	return (
		<div className={styles.task}>
			<h2>In Progress</h2>
			<div>
				{arrayTask[2].issues.map(task => {
					return <Task key={task.id} title={task.title} />;
				})}
			</div>
			<button>
				<img src='./img/Plus.svg' alt='plus' />
				Add card
			</button>
		</div>
	);
};

export default TaskInProgres;