import Button from '../button/Button';
import Input from '../input/Input';
import Task from '../tasks/Task';
import styles from './StatusTask.module.css';

const TaskBacklog = ({
	arrayTask,
	showInput,
	title,
	setTitle,
	showSubmit,
	ReversButtonChange,
	buttonChange,
	showAdd,
	setArrayTask,
}) => {
	return (
		<div className={styles.task}>
			<h2>Backlog</h2>
			<div>
				{arrayTask[0].issues.map(task => {
					return <Task key={task.id} title={task.title} />;
				})}
			</div>

			{showInput ? <Input title={title} setTitle={setTitle} /> : <></>}
			{showSubmit ? (
				<Button
					ReversButtonChange={ReversButtonChange}
					title={title}
					setTitle={setTitle}
					arrayTask={arrayTask}
					setArrayTask={setArrayTask}
				/>
			) : (
				<></>
			)}
			{showAdd ? (
				<button onClick={() => buttonChange()}>
					<img src='./img/Plus.svg' alt='plus' />
					Add card
				</button>
			) : (
				<></>
			)}
		</div>
	);
};

export default TaskBacklog;
