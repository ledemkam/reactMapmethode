import React, { Component } from 'react';

class Test extends Component {
   render() {
      return this.props.name.map((pres) => (
         <h1 key={pres.id}>
            {this.props.name} {this.props.prename} {pres.age}
         </h1>
      ));
   }
}
export default Test;
