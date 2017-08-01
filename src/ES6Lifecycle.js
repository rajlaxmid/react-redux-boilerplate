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

	increment(){
		this.setState({count: this.state.count+1});
	}
	render() {
		console.log('4. ES6Lifecycle >> render called  (called everyTime component update)')				

		return (<div style={{width: '600px', border: '1px solid #cdcdcd', padding: '20px'}}>
			<Menu />
			<p><b>This is ES6Lifecycle component, Please check the console for the sequence of LIfeCycle Events {this.props.name}</b></p>
		    <button onClick={this.increment.bind(this)}>increment Count: render when count == ODD_no</button>: {this.state.count}
			<h3>Clear the console and REFRESH the page</h3>
		</div>);
	}

	shouldComponentUpdate(nextProps, nextState){
		//It is called whenever there is update in state/props
		
		//if count is ODD number, then it will return false >> hence component will not be rendered
		console.log('shouldComponentUpdate called');
		return nextState.count%2!=0? false: true;
    	
	}
	
	componentWillUpdate(nextProps, nextState){
		// This is called just after shouldComponentUpdate(),
		// We should strictly not use setState() here, because shouldComponentUpdate() trigger an update
		console.log('componentWillUpdate called')
	}
	
	componentDidUpdate(prevProps, prevState){
		// componentDidUpdate is called after the render method (when component is updated after initial render)
		//Similar to the componentDidMount, this method can be used to perform DOM operations after the data has been updated.
		console.log('componentDidUpdate called')
	}
}


export default ES6Lifecycle;