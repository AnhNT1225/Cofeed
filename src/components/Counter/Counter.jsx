import React from "react";


class ClassCounter extends React.Component{
  constructor() {
    super();
    this.state = { counter: 42 };
    this.increase = this.increase.bind(this)
  }

  increase () {
    this.setState({counter: this.state.counter+1})
  }

  render(){
      return(
          <>
          <h2 className="counter">{this.state.counter}</h2>
          <button className="counter-button" onClick={this.increase}>Click</button>
          </>
      )
  }
}

export default ClassCounter
