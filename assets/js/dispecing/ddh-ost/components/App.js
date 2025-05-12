import React from 'react'
import Notification from '../../../components/Notification'
import MainContent from './MainContent'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification />
        <MainContent />
        <br/>
        <br/>
      </div>
    )
  }
}

export default hot(module)(App)