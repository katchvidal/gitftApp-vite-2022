import React from 'react'

export const GifCard = ({ url, title, id }) => {
  return (
    <div className='card'> 
        <p> { title } </p>
        <img src={ url } />
    </div>
  )
}
