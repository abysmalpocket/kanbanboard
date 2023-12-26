import { useState } from 'react';
import styles from './StatusTask.module.css';
import TaskBacklog from './TaskBacklog';
import TaskFinished from './TaskFinished';
import TaskInProgres from './TaskInProgres';
import TaskReady from './TaskReady';

const StatusTask = ({ arrayTask, setArrayTask }) => {
	const [title, setTitle] = useState('');
	const [showAdd, setShowAdd] = useState(true);
	const [showInput, setShowInput] = useState(false);
	const [showSubmit, setShowSubmit] = useState(false);

	const buttonChange = () => {
		setShowInput(true);
		setShowSubmit(true);
		setShowAdd(false);
	};

	const ReversButtonChange = () => {
		setShowInput(false);
		setShowSubmit(false);
		setShowAdd(true);
	};

	return (
		<div className={styles.block}>
			<TaskBacklog
				arrayTask={arrayTask}
				buttonChange={buttonChange}
				ReversButtonChange={ReversButtonChange}
				showInput={showInput}
				showSubmit={showSubmit}
				setTitle={setTitle}
				title={title}
				showAdd={showAdd}
				setArrayTask={setArrayTask}
			/>
			<TaskReady arrayTask={arrayTask} setArrayTask={setArrayTask} />
			<TaskInProgres arrayTask={arrayTask} />
			<TaskFinished arrayTask={arrayTask} />
		</div>
	);
};

export default StatusTask;
