import styles from './Footer.module.css'

const Footer = ({ arrayTask }) => {
	const changesTask = arrayTask[0].length;
	
	return (
		<div className={styles.footer}>
			<div className={styles.left1}>
				<div style={{ display: 'flex', gap: '5px' }}>
					<h2>Active Tasks:</h2>
					<p>{changesTask}</p>
				</div>
				<div style={{ display: 'flex', gap: '5px' }}>
					<h2>Finished Tasks:</h2>
					<p>{arrayTask[3].length}</p>
				</div>
			</div>
			<div>
				<p>Kanban board by Denis, 23 years old</p>
			</div>
		</div>
	)
}

export default Footer;
