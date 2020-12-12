import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'
import Search from '../Components/Search'

class InstructorContainer extends React.Component {

  state = {
    instructors: [],
    instructor: {},
    searchValue: ""
  }
  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }
  
  componentDidMount() {
    fetch("http://localhost:4000/instructors").then(resp => resp.json()).then(data => this.setState({ instructors: data}))
  }

  filteredInstructors = () => {
    return this.state.instructors.filter(inst => inst.name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase()))
  }

  submitHandler = (newInstructor) => {
    let newArray = [...this.state.instructors, newInstructor]
    this.setState({ instructors: newArray })
  }

  render() {
    let instructors = this.filteredInstructors().map(instructorObj => <Instructor key={instructorObj
      .id} instructor={instructorObj} appClickHandler={this.props.appClickHandler} />)
    return (
      <>
        {this.state.instructors.length === 0 ? <h1>LOADING INSTRUCTORS</h1> :
          <>
            <Form submitHandler={this.submitHandler} />
            <br></br>
            <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
            { instructors}
          </>
        }
      </>
    )
  }

}

export default InstructorContainer