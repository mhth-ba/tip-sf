import React from 'react'
import Footer from './Footer'
import Counter from './Counter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import FileUpload from './FileUpload'
import Notification from '../../components/Notification'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <Notification />
        <FileUpload />
        <Counter />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default hot(module)(App)
