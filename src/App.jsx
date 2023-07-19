import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      selectedBeast: {},
      showModal: false
    };
  }

  selectBeast = (beast) => {
    this.setState({ selectedBeast: beast, showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main beasts={this.state.beasts} selectBeast={this.selectBeast} />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast} 
          show={this.state.showModal} 
          handleClose={this.closeModal} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
