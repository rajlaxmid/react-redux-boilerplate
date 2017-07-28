import React from 'react';
import Menu from './Menu';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createUser } from './store/actions';



class Login extends React.Component {

   submitForm(e){
    var user={myName:this.refs.userName.value, myAddress:this.refs.userAddress.value} 
    console.log(user);
    this.props.createUser(user);

   };
   
   render() {

      return (
      	<div>
              <Menu/>
			Login Page
           UserName: <input type='text' ref='userName'/>  
           UserAddress: <input type='text' ref='userAddress'/>
           <button type='submit'onClick={this.submitForm.bind(this)} >Submit</button>
           
        </div> 

      );
   }
}



function mapDispatchToProps(dispatch){
  return {
    createUser: bindActionCreators(createUser, dispatch)
    
  }
}

// function mapStateToProps(state){
//     console.log(state.testme.id)
//     return{
//         id: state.testme.id,
//         name:state.getName.id
//     }
// }

const _Login = connect(null, mapDispatchToProps )(Login);

export default _Login;