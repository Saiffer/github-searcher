import React from 'react'
import './Results.css'
function Results (props) {
  console.log(props)

  return (
    <>
      {!props.data ? (
        'Start by searching the name'
      ) : (
        <div className='card card-mine'>
          <img
            src={props.data.avatar_url}
            className='card-img-top avatar'
            alt='avatar'
          />

          <div className='card-body'>
            <h1 className='card-title'>{props.data.name}</h1>
            <h3 className='card-text'>{props.data.public_repos}</h3>
            <a class='btn btn-primary' href={props.data.html_url}>
              {props.data.url ? 'Link to the profile' : 'Loading'}
              <br />
              {props.data.message == 'Not Found' ? props.data.message : ''}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Results
