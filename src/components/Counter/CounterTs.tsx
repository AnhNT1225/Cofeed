import React, { useState } from 'react'

interface CounterState {
    counter: number;
}
class CounterTs extends React.Component<{},CounterState>{
    state: CounterState = {
        counter: 42
    }

    increase = () => {
        this.setState({counter: this.state.counter + 1})
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

const CounterFc : React.FC = () => {
    const [counter, setCounter] = useState<number>(42);
    const increase = () => {
        setCounter(counter+1);
    }
    return(
        <>
            <h2 className="counter">{counter}</h2>
            <button className="counter-button" onClick={increase}>Click</button>
            </>
        
    )
}
export {CounterTs, CounterFc}