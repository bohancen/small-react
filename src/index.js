import React,{Component,Fragment} from 'react'
import {render} from 'react-dom'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'test'
    }
    window.connectHeader = this.connectHeader.bind(this)
    window.updataHeader = this.updataHeader.bind(this)
  }
  connectHeader(state){
    this.setState({
      ...this.state,
      ...state
    })
  }
  updataHeader(){
    let store = localStorage()
    this.setState({
      ...this.state,
      ...store
    })
  }
  event(){
    this.setState({
      title:'prod'
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.title}
        <button onClick={this.event.bind(this)}>点我</button>
      </div>
    );
  }
}

render(
  <Header />,
  document.getElementById('header')
)