import styles from './Header.module.css';

const Header = () => {
	return(
		<div
		className={styles.header}>
			<h1>My Awesome Kanban Board</h1>
			<div className={styles.avatar}>
				<div>
					<img src='./img/user-avatar.svg' alt='my__face' />
				</div>
				<img src='./img/arrowBottom.svg' alt='arrow__bott' />
			</div>
		</div>
	)
}

export default Header;