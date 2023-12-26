import Task from '../tasks/Task';
import styles from './StatusTask.module.css';
import { useState } from 'react'


const TaskReady = ({ arrayTask, setArrayTask }) => {
	const [selectedIssue, setSelectedIssue] = useState('');

	const handleMoveIssue = () => {
		const result = arrayTask[0].issues.map((task, index) => {
			if (task.id === selectedIssue) {
				arrayTask[1].issues.push(task);
				arrayTask[0].issues.splice(index,1)
			}
		}) 
		setArrayTask(result)
	}

	const checkPrevList = () => {
		if (arrayTask[0].issues) {
		  return (
			<div>
			  <select
			  className='select'
				value={selectedIssue}
				onChange={(e) => setSelectedIssue(e.target.value)}
			  >
				<option value=""></option>
				<img src="./img/Plus.svg" alt="" />
				{arrayTask[0].issues.map((issue) => (
				  <option key={issue.id} value={issue.id}>
					{issue.title}
				  </option>
				))}
			  </select>
			  <button onClick={() => handleMoveIssue()}>Add card</button>
			</div>
		  );
		}
		// return <button disabled>Cannot add card</button>;
	  };

	return (
		<div className={styles.task}>
			<h2>Ready</h2>
			<div>
				{arrayTask[1].issues.map(task => {
					return <Task key={task.id} title={task.title} />;
				})}
			</div>
			{checkPrevList()}
			{/* <button>
				<img src='./img/Plus.svg' alt='plus' />
				Add card
			</button> */}
		</div>
	);
};

export default TaskReady;
