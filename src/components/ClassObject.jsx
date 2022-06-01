import React from 'react'

class ClassObject extends React.Component {
  state = { user: { firstName: '', lastName: '' } }

  changeNameHandler = (e) => {
    this.setState({ user: { ...this.state.user, firstName: e.target.value } })
  }

  changeLastNameHandler = (e) => {
    this.setState({ user: { ...this.state.user, lastName: e.target.value } })
  }
  render() {
    const { firstName, lastName } = this.state.user
    return (
      <form>
        <input type="text" value={firstName} onChange={this.changeNameHandler} />
        <h2>This is My First Name: {firstName}</h2>
        <input type="text" value={lastName} onChange={this.changeLastNameHandler} />
        <h2>This is My Last Name: {lastName}</h2>
      </form>
    )
  }
}

export default ClassObject
