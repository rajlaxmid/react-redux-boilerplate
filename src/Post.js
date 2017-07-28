import React from 'react';
import Menu from './Menu';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getPost } from './store/actions';



class Post extends React.Component {

    constructor(props){
        super(props);
    }
   
   
    
componentDidMount(){
    //debugger
    this.props.getPost();
}

   render() {
     
      return (
        
      	<div>
            <Menu />                
			Post Page <br/>
            PostData: {this.props.postname}
            <br/>
            {
              this.props.post.hasOwnProperty('post') ?
              this.props.post.post.map(function(item,i ){
                  return <div key={i}>
                    <h1>{item.title}</h1>
                  </div>
              }):<div>Loading</div>
            }
            
        </div> 

      );
   }
}


//export  Post;

function mapDispatchToProps(dispatch){
  return {
    getPost: bindActionCreators(getPost, dispatch),
  }
}

function mapStateToProps(state){
    console.log('>>>>>>>> ', Object.keys(state.getPost).length);
    return{
        post: state.getPost
    }
      
}

const _Post = connect(mapStateToProps, mapDispatchToProps )(Post);

export default _Post;