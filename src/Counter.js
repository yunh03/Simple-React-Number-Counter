import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease = () => {
    if(this.state.number == 0) {
        this.setState({
            number: 0
        });
        alert("카운팅 비활성화 됨")
    } else {
        this.setState({
            number: this.state.number - 1
        });
    }
    
  }

  handleReset = () => {
      this.setState({
          number: 0
      });
  }

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

export default Counter;