import React, { useState } from 'react'
import { v4 as uuid } from "uuid";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = () => {
  return (
    <div className='todo-form'>
      <input
        type='text'
        placeholder='What do you need to do?'
      />
      <button>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  )
}

export default Input