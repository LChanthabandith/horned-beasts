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
      showModal: false,
      selectedHorns: 0,
    };
  }

  selectBeast = (beast) => {
    this.setState({ selectedBeast: beast, showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  handleSelect = (event) => {
    this.setState({ selectedHorns: Number(event.target.value) });
  }

  render() {
    let filteredBeasts = this.state.beasts;
    if (this.state.selectedHorns > 0) {
      filteredBeasts = this.state.beasts.filter(beast => beast.horns === this.state.selectedHorns);
    }
    return (
      <div className="App">
        <Header />
        <Main 
          beasts={filteredBeasts} 
          selectBeast={this.selectBeast} 
          handleSelect={this.handleSelect}
        />
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
