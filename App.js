import React from 'react';
import Application from './src/Application'

class App extends React.Component {
   render() {
      return (
         <div>
            {this.props.children}
         </div>
      );
   }
}

export default App;