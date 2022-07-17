import React from 'react'
import PropTypes from 'prop-types';

export const GifCard = ({ title, url, id }) => {
  return (
    <div className='card'> 
        <p> { title } </p>
        <img src={ url } alt={ title } />
    </div>
  )
}

GifCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};