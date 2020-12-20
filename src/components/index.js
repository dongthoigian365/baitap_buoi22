import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import './style.scss'

const TodoApp = () => {
  return (
    <div className='todo-app'>
      <Header />
      <Body />
    </div>
  )
}

export default TodoApp