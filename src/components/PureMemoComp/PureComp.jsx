import { PureComponent } from 'react/cjs/react.production.min'

class PureComp extends PureComponent {
  render() {
      console.log('Pure Component');
    return <div>pure comp - {this.props.name}</div>
  }
}

export default PureComp
