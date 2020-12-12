import React from 'react'



class Instructor extends React.Component {

  instructorClickHandler = () => {
    if(this.props.appClickHandler){this.props.appClickHandler(this.props.instructor)}
  }

  componentDidUpdate() {
    console.log("CDU in instructor")
  }

  componentWillUnmount(){
    console.log("unmounting instructor")
  }

  render() {
    return <p onClick={this.instructorClickHandler}>{this.props.instructor.name}</p>
  }

}

export default Instructor