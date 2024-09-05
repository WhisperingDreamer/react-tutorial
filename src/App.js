import React from 'react'
import Header from './components/Header'
import Image from './components/img'
import logo from './img/logo.png'

// ReactDOM.render(React.createElement('input', {
//     placeholder: 'Help text',
//     onClick: () => console.log('Clicked'),
//     onMouseEnter: () => console.log('Mouse Over')
// }), document.getElementById('app'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      helpText: 'Help Text',
      userDate: ''
    }

    this.inputClick = this.inputClick.bind(this)
  }

  helpText = 'Help Text'
  render() {
  return (<div className='name'>
    <Header title='Шапка сайта' />
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.state.helpText}
        onChange={event => this.setState({userData: event.target.value})}
        onClick={this.inputClick} onMouseOver={this.mouseOver} />
        <p>{this.state.helpText === 'Help Text' ? 'Yes' : 'No'}</p>
        <Image image={logo} />
    </div>)
  }

  inputClick() {
    this.setState({helpText: 'Changed'})
    console.log('Clicked')
  }
  mouseOver() {console.log('Mouse Over')}
}

export default App
