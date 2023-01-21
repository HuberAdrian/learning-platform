import React from 'react'

function GamePreview({title, description}) {

  return (
    <div className='azubi-game' >
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
  )
}

export default GamePreview