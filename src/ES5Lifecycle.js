import React from 'react';
import Menu from './Menu';

const ES5Lifecycle = React.createClass({
	getInitialState: function(){
		console.log('2. ES5Lifecycle >> getInitialState called (called once b4 component render)'); 
    	return { count: 0};
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
	increment(){
		this.setState({count: this.state.count+1});
	},
	render() {
		console.log('4. ES5Lifecycle >> render called  (called everyTime component update) '+this.state.count);				
		return (<div style={{width: '600px', border: '1px solid #cdcdcd', padding: '20px'}}>
			      <Menu />
				  <button onClick={this.increment}>increment Count: render when count == EVEN_no</button>: {this.state.count}
			      <p><i>This is ES5Lifecycle component, Please check the console for the sequence of LIfeCycle Events</i></p>
				  <h3>Clear the console and refresh the page</h3>
			   </div>
		);
	},

	shouldComponentUpdate: function(nextProps, nextState){
		//It is called whenever there is update in state/props
		
		//if count is EVEN number, then it will return false >> hence component will not be rendered
		console.log('shouldComponentUpdate called');
		return nextState.count%2==0? false: true;
    	
	},
	
	componentWillUpdate: function(nextProps, nextState){
		// This is called just after shouldComponentUpdate(),
		// We should strictly not use setState() here, because shouldComponentUpdate() trigger an update
		console.log('componentWillUpdate called')
	},
	
	componentDidUpdate: function(prevProps, prevState){
		// componentDidUpdate is called after the render method (when component is updated after initial render)
		//Similar to the componentDidMount, this method can be used to perform DOM operations after the data has been updated.
		console.log('componentDidUpdate called')
	}
})

export default ES5Lifecycle;