import React, { Component } from 'react';
import MainApp from './Components/MainApp';
import UserRegister from './Components/UserRegister';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Tony",
      showMain: false
    };
  }

  SaveUser(data){
    this.setState({showMain: true});
  }

  render() {
    return (
      <div className="App">
        <div className="UserReg" style={{display: this.state.showMain ? 'none' : 'block'}}>
          <UserRegister SaveUser={(data) => this.SaveUser(data)} />
        </div>
        <div className="MainApp" style={{display: this.state.showMain ? 'block' : 'none'}}>
          <MainApp name={this.state.name} />
        </div>
      </div>
    );
  }
}

export default App;
