import React, {Component} from 'react';
import './App.css';
import CourseTree from './components/CourseTree';

class App extends Component {
	render() {
		return (
			<div className="App">
				<CourseTree/>
			</div>
		);
	}
}

export default App;
