import React, { Component } from 'react'

class ClassTimer extends Component {
  state = { count: 0 }
  
  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log('slm')
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('CWUM')
    clearInterval(this.myTimer)
  }

  render() {
    return (
      <>
        <div>Class Interval</div>
      </>
    )
  }
}

export default ClassTimer
