import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';

class App extends React.Component {

  state = { instructor: {} }

  appClickHandler = (instructorObj) => {
    console.log("%c In App now", 'color: red', instructorObj)
    this.setState({ instructor: instructorObj })
  }

  render() {
    return (
      <>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor}/>
      </>
    )
  }

}

export default App;