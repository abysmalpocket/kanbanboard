import Task from '../tasks/Task';
import styles from './StatusTask.module.css';

const TaskFinished = ({ arrayTask }) => {
	return (
		<div className={styles.task}>
			<h2>Finished</h2>
			<div>
				{arrayTask[3].issues.map(task => {
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

export default TaskFinished;