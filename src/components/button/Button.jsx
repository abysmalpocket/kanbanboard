import styles from './Button.module.css';

const Button = ({ ReversButtonChange, title, setTitle, arrayTask, setArrayTask }) => {
	return (
		<>
			<button
				className={styles.button}
				onClick={() => {
					const newTask = {
						id: arrayTask[0].length + 1,
						title: title,
						description: 'no description',
					};
					ReversButtonChange();
					// arrayTask[0].push(newTask);
					const updatedTaskList = arrayTask.map((list) => {
						if (list.title === 'backlog') {
							return {
								...list,
								issues: [...list.issues, newTask]
							};
						}
						return list;
					});
				
					setArrayTask(updatedTaskList);
					setTitle('');
				}}
			>
				Submit
			</button>
		</>
	);
};

export default Button;
