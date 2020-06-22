import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div className="counter-main">
        <h1>{this.state.number}</h1>
        <div class="counter-button-area">
          <button className="counter-plus" onClick={this.handleIncrease}>+</button>
          <button className="counter-minus" onClick={this.handleDecrease}>-</button>
        </div>
        <a className="counter-reset" onClick={this.handleReset}>Reset</a>
      </div>
    );
  }
}

export default Navbar;