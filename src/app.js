
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>BASIC REACT COUNTER APP!!!!</h1>
    </header>
  );
};

class Counter extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleHalf = this.handleHalf.bind(this);
  }

  handlePlus(event) {
    event.preventDefault();
    let count = this.state.count + 1;

    this.setState({count});


    console.log('count: +1', 'state: ' + this.state.count);
  };

  handleMinus = (event) => {
    event.preventDefault();
    let count = this.state.count - 1;

    this.setState({count});

    console.log('count: -1', 'state: ' + this.state.count);
  };

  handleDouble = (event) => {
    event.preventDefault();
    let count = this.state.count * 2;

    this.setState({count});
  }

  handleHalf = (event) => {
    event.preventDefault();
    let count = this.state.count / 2;

    this.setState({count});
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleDouble}>x2</button>
        <button onClick={this.handleHalf}>/2</button>
      </div>
    )
  }
}

class App extends React.Component{
  render() {
    return(
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
