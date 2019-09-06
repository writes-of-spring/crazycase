import React, { useState, useEffect } from 'react'
import { convertCase } from './functions/crazyCase'

const ConvertString = () => {
  const [string, setString] = useState('Crazy String')
  const [crazyString, setCrazyString] = useState('')
  const [isCrazyCase, setCrazyCase] = useState(false)
  useEffect(() => {
    convertCase(string, setCrazyString)
  }, [string])

  return (
    <div>
      <input type="text" onChange={e => setString(e.target.value)} />
      <div>
        {/* <button onClick={() => convertCase(string, setCrazyString)}>Crazy Button</button> */}{' '}
        <input
          type="radio"
          name="crazyCase"
          id="normalstring"
          value="off"
          onChange={() => setCrazyCase(!isCrazyCase)}
          checked={!isCrazyCase}
        />{' '}
        <label htmlFor="normalstring">Off</label> <br />
        <input
          type="radio"
          name="crazyCase"
          id="crazystring"
          value="on"
          onChange={() => setCrazyCase(!isCrazyCase)}
          checked={isCrazyCase}
        />
        <label htmlFor="crazystring">On</label>
        <br />
      </div>
      {isCrazyCase ? <h2>{crazyString}</h2> : <h2>{string}</h2>}
    </div>
  )
}
export default ConvertString
