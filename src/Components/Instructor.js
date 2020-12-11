import React from 'react'



class Instructor extends React.Component {

  instructorClickHandler = () => {
    if(this.props.appClickHandler){this.props.appClickHandler(this.props.instructor)}
  }
  render() {
    return <p onClick={this.instructorClickHandler}>{this.props.instructor.name}</p>
  }

}

export default Instructor