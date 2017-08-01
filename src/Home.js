import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from './Menu';
import { testme } from './store/actions';
import { getName } from './store/actions';


class Home extends React.Component {

    constructor(props){
        super(props);
    }
   
   clickHandle(e){
    //   debugger
    //console.log('btn clicked');
    this.props.testme();
    
   }
clickHandleForName(e){
    //   debugger
    //console.log('btn clicked');
    
    
   }
componentDidMount(){
    //debugger
    this.props.getName();
}

   render() {

      return (
      	<div>
            <Menu />             
			Home Page {this.props.id}
            <button onClick={this.clickHandle.bind(this)}>call func</button><br/>
            Name: {this.props.name}
            <button onClick={this.clickHandleForName.bind(this)}>get Name</button>
        </div> 

      );
   }
}




//export default Home;

function mapDispatchToProps(dispatch){
  return {
    testme: bindActionCreators(testme, dispatch),
    getName: bindActionCreators(getName, dispatch)
    
  }
}

function mapStateToProps(state){
    console.log(state.testme.id)
    return{
        id: state.testme.id,
        name:state.getName.id
    }
}

const _Home = connect(mapStateToProps, mapDispatchToProps )(Home);

export default _Home;