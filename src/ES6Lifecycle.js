import React from 'react';
import Menu from './Menu';

class ES6Lifecycle extends React.Component {
	static get defaultProps(){
		console.log('1. ES6Lifecycle >> getDefaultProps called (called once b4 component render and it called "evn before page is called")');
    	return { name: 'RAJ'};
	}
	
	constructor(){
		super();
		this.state = {count: 0};
		console.log('2. ES6Lifecycle >> initialState can be set here (called once b4 component render)');
	}
	
	componentWillMount(){
		console.log('3. ES6Lifecycle >> componentWillMount called (called once b4 component render)');		
	}
	
	componentDidMount(){
		console.log('5. ES6Lifecycle >> componentDidMount called (called once AFTER component render)');			
	}
	render() {
		console.log('4. ES6Lifecycle >> render called  (called everyTime component update)')				

		return (<div>
			<Menu />
			<b>This is ES6Lifecycle component, Please check the console for the sequence of LIfeCycle Events {this.props.name}</b>
		</div>);
	}
}


export default ES6Lifecycle;