import styles from './Input.module.css'

const Input = ({ title, setTitle }) => {
	return (
		<>
			<input
				className={styles.input}
				type='text'
				placeholder='name'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
		</>
	)
}

export default Input;