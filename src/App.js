import React, { useState } from 'react'
import './App.css'
import ConvertString from './convertString'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="main-wrapper">
      <ConvertString />
    </div>
  )
}

export default App
