import React from 'react'
import NewsLetterPDF from '../../assets/resume.pdf'

const newsletter = () => {
  return (
    <div className='newsletter'>
        <a href={NewsLetterPDF} download className='btn'>Résumé</a>
        <a href="#contact" className='btn btn-primary'>Connéct with mé</a>
    </div>
  )
}

export default newsletter