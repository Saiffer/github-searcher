import React, { useState, useEffect } from 'react'
import Results from './Results'
import './Github.css'
function Github () {
  const [login, setLogin] = useState('')
  const [data, setData] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(login)
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='login' className='label'>
          Enter the name:
          <br />
          <input
            type='text'
            name='login'
            className='inputForm'
            onChange={event => setLogin(event.target.value)}
          />
        </label>
        <input type='submit' value='Search' className='sub-btn' />
      </form>
      <Results data={data} />
    </div>
  )
}

export default Github
