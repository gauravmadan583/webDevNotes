import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("Constructor function is executed");
    super();
    this.state = {
      date: new Date(),
      count: 0
    }
  };

  
  componentDidMount() {

    setInterval(this.tick, 1000);
    console.log("Component did mount is executed");
  }

  componentWillUnmount() {
    console.log("Component will unmount is executed");
  }

  tick = () => {
    // this.state.date = new Date();

    // this.setState({
    //   date: new Date(),
    //   count: this.state.count+1
    // });

    this.setState((state, props) => ({
      date: new Date(),
      count: this.state.count + 1
    }))
  }
  render () {
    console.log("Render function is executed");
    // console.log(this.state.date);
    return (
      <div>
        Clock app


        <div>{this.state.date.toLocaleTimeString()}</div>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default App;
