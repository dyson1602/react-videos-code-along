import React from 'react'

class Form extends React.Component {


  state = {
    name: "",
    mod: ""
  }

  changeHandler = (e) => {

    //ES6 functionality
    this.setState({ [e.target.name]: e.target.value})

    // if (e.target.name === "name"){
    //   this.setState({ name: e.target.value })
    // } else if (e.target.name === "mod") {
    //   this.setState({ mod: e.target.value})
    // }
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.props.submitHandler({ name: e.target[0].value })
        this.setState({ name: "", mod: ""})
      }}>
        <input type="text" name="name" placeholder="enter instructor name" value={this.state.name} onChange={this.changeHandler}/>
        <input type="number" name="mod" placeholder="enter mod number" value={this.state.mod} onChange={this.changeHandler}/>
        <input type="submit" value="create instructor" />
      </form>
    )
  }

}

//uncontrolled component, when the single source of truth is the DOM


export default Form