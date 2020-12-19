import React from 'react'
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer';
import Welcome from './Components/Welcome'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/Navbar';

class App extends React.Component {

  state = { instructor: {} }

  appClickHandler = (instructorObj) => {
    this.setState({ instructor: instructorObj })
  }

  render() {
    return (
      <>
        <NavBar />
        <Header />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/anime" render={() => <AnimeContainer instructor={this.state.instructor} />} />
          {/* <Route path="/instructors/:id" render={() => <InstructorContainer appClickHandler={this.appClickHandler} />} /> */}
          <Route path="/instructors" render={() => <InstructorContainer appClickHandler={this.appClickHandler} />} />
        </Switch>
      </>
    )
  }

}

export default App;