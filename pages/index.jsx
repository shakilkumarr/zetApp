import { Component } from 'react';
import DIV from './styles'

class App extends Component{
  state = {
    val: ""
  }
  componentDidMount = () => {
    this.setState({
      val: 'TEST'
    })
  }
  render() {
    return (
      <DIV>
        <div>{this.state.val}</div>
      </DIV>
    )
  }
}

export default App;
