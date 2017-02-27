import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {

  increment(event){
      event.preventDefault();
      this.props.dispatch({ type: 'counter:increment' });
  }

  reset (event){
      event.preventDefault();
      this.props.dispatch({ type: 'counter:reset', value: 0 });
  }

  render() {
    return (
      <div>
          Counter is {this.props.store.counter}
          <button onClick={this.reset.bind(this)}>Reset</button>
          <button onClick={this.increment.bind(this)}>Add</button>
      </div>
    );
  }
}

export default App = connect((state) => {
    return state
})(App);
