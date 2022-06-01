import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
  state = { name: 'ali' }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: this.state.name })
    }, 1000)
  }
  render() {
    console.log('Parent Comp')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
