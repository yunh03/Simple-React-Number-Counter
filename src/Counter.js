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
          <button className="counter-pmbtn" onClick={this.handleIncrease}><i class="fas fa-plus"></i></button>
          <button className="counter-pmbtn counter-pmbtn-margin" onClick={this.handleDecrease}><i class="fas fa-minus"></i></button>
        </div>
        <a className="counter-reset" onClick={this.handleReset}>Reset<i class="fas fa-angle-right"></i></a>
      </div>
    );
  }
}

export default Counter;