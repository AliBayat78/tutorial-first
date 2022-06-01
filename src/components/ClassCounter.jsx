import React, { Component } from 'react'

class ClassCounter extends Component {
  state = { count: 0, name: '' }
  addOneHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  componentDidMount() {
    document.title = `clicked: ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('document title Updating')
      document.title = `clicked: ${this.state.count} times`
    }
  }
  // addThreeHandler = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 3 }
  //   })
  // }

  // addSevenHandler = () => {
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 7 }
  //   })
  // }
  render() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <h2>count - {this.state.count}</h2>
        <button onClick={this.addOneHandler}>add one</button>
        {/* <button onClick={this.addThreeHandler}>add three</button>
        <button onClick={this.addSevenHandler}>add seven</button> */}
      </div>
    )
  }
}

export default ClassCounter
