import React from 'react';
import Menu from './Menu';

const ES5Lifecycle = React.createClass({
	getInitialState: function(){
		console.log('2. ES5Lifecycle >> getInitialState called (called once b4 component render)'); 
    	return { /* something here */};
	},
	getDefaultProps: function(){
		console.log('1. ES5Lifecycle >> getDefaultProps called (called once b4 component render  and it called "evn before page is called")')
    	return { /* something here */};
	},
	componentWillMount: function(){
		console.log('3. ES5Lifecycle >> componentWillMount called (called once b4 component render)')		
	},
	componentDidMount: function(){
		console.log('5. ES5Lifecycle >> componentDidMount called (called once AFTER component render)');			
	}, 
	render() {
		console.log('4. ES5Lifecycle >> render called  (called everyTime component update)')				
		return (<div>
			      <Menu />
			      <i>This is ES5Lifecycle component, Please check the console for the sequence of LIfeCycle Events</i>
				  <h3>Clear the console and refresh the page</h3>
			   </div>
		);
	}
})

export default ES5Lifecycle;