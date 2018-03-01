import React from 'react'
import Footer from './Footer'
import Counter from './Counter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        <Counter />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App
