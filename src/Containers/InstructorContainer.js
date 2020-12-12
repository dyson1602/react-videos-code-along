import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'
import Search from '../Components/Search'


class InstructorContainer extends React.Component {

  state = {
    //original array being maintained
    instructors: [{ id: 1, name: "Steven", mod: 3 }, { id: 2, name: "Caryn", mod: 1 },
    { id: 3, name: "Greg", mod: 2 }],
    //a key to maintain the search value
    searchValue: ""
  }

  filteredInstructors = () => {
    return this.state.instructors.filter(inst => inst.name.toLocaleLowerCase().
      includes(this.state.searchValue))
  }

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  submitHandler = (newInstructor) => {
    let newArray = [...this.state.instructors, newInstructor]
    this.setState({ instructors: newArray })
  }

  render() {
    let instructors = this.filteredInstructors().map(instructorObj => <Instructor key={instructorObj.
      id} instructor={instructorObj} appClickHandler={this.props.appClickHandler} />)
    return (
      <>
        <Form submitHandler={this.submitHandler} />
        <br></br>
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} />
        { instructors}
      </>
    )
  }

}

export default InstructorContainer