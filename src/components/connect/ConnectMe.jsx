import React from 'react'

const connectme = ({ cv, primary, secondary }) => {
  return (
    <div className='connectme'>
      <a href={cv} download className='btn'>{primary}</a>
      <a href="#contact" className='btn btn-primary'>{secondary}</a>
    </div>
  )
}

export default connectme