import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'


class InstructorContainer extends React.Component {

  state = {
    instructors: [{ id: 1, name: "Steven", mod: 3 }, { id: 2, name: "Caryn", mod: 1 }, { id: 3, name: "Greg", mod: 2 }]
  }

  submitHandler = (newInstructor) => {
    this.setState((prevState) => ({
      instructors: [...prevState.instructors, newInstructor]
    }))
  }

  render() {
    let instructors = this.state.instructors.map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={this.props.appClickHandler} />)
    return (
      <>
        <Form submitHandler={this.submitHandler}/>
        { instructors }
      </>
    )
  }

}

export default InstructorContainer