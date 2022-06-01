import React, { Component } from 'react'
import { createRef } from 'react'

class ClassRef extends Component {
  state = { name: '' }
  changeHandler = (e) => {
    this.setState({ name: e.target.value })
  }

  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h3>your current name: {this.state.name}</h3>
        <input
          type="text"
          style={{ background: 'cyan' }}
          value={this.state.name}
          onChange={(e) => this.changeHandler(e)}
          ref={this.inputRef}
        />
      </div>
    )
  }
}

export default ClassRef
