import React, { Component } from 'react'

class ClassArray extends Component {
  state = { items: [] }

  addItemHandler = () => {
    const number = { id: this.state.items.length, number: Math.floor(Math.random() * 20) }
    this.setState({ items: [...this.state.items, number] })
  }

  render() {
    return (
      <div>
        <p>
          {this.state.items.map((item) => {
            return <li key={item.id}>{item.number}</li>
          })}
        </p>
        <button onClick={this.addItemHandler}>add Item</button>
      </div>
    )
  }
}

export default ClassArray
