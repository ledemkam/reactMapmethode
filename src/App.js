import React, { Component } from 'react';
import './App.css';
import Test from './Test';

class App extends Component {
   state = {
      presentation: [
         {
            id: 1,
            name: 'Mcdonald',
            prename: 'Arold',
            age: 25,
         },
         {
            id: 2,
            name: 'kamtos',
            prename: 'riso',
            age: 35,
         },
         {
            id: 3,
            name: 'pakson',
            prename: 'paco',
            age: 45,
         },
      ],
   };
   rajeunir =() =>{
      const myState = this.state.presentation.map((utilisateurs) => {  
        utilisateurs.age -= 5;
        return utilisateurs.age;
   })

   render() {
      return (
         <div class="App">
            <Test name={this.state.presentation} />
            <button onClick={this.rajeunir}>Rajeunir</button>
         </div>
      );
   }
}

export default App;
