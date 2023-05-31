// import './App.css'
import React, { useState } from 'react'
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
