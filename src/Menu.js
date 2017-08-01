import React from 'react';


class Menu extends React.Component {
   
   render() {

      return (
      	<div>
			<a href="#home">Home</a> | 
            <a href="#about">About</a> |
            <a href="#login">login</a> |
            <a href="#post">post</a> |
            <a href="#es5lifecycle">ES5 component Lifecycle</a> |
            <a href="#es6lifecycle">ES6 component Lifecycle</a>
        </div> 

      );
   }
}


export default Menu;