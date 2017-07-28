import React from 'react';


class Menu extends React.Component {
   
   render() {

      return (
      	<div>
			<a href="#home">Home</a> | 
            <a href="#about">About</a> |
            <a href="#login">login</a>
            <a href="#post">post</a>
            
        </div> 

      );
   }
}


export default Menu;