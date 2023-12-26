import React from 'react'
import '../global_styles/styles.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import StatusTask from './statustasks/StatusTask'
import MockArrayTask from './MockArrayTask'

function App() {
	const [arrayTask, setArrayTask] = React.useState(JSON.parse(localStorage.getItem('kanbanData')) || MockArrayTask);

	React.useEffect(()=>{
		// setArrayTask(arrayTask);
		localStorage.setItem('kanbanData', JSON.stringify(arrayTask));
	  },[arrayTask]);
	
	return (
		<div className='App'>
		<Header />
		<div className='main'>
			<div id='wrapper'>
				<StatusTask arrayTask={arrayTask} setArrayTask = {setArrayTask} />
			</div>
		</div>

		<Footer arrayTask={arrayTask} />
	    </div>
	);
}

export default App;