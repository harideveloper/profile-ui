import React from 'react'

const SocialMedia = ({payload}) => {
  return (
    <div className='SocialMedia'>
      {payload.socialmedia.map(sm => (
        <a href={sm.link} key={sm.name} target="_blank" rel="noopener noreferrer">{sm.icon}</a>
      ))}
    </div>
  );
}

export default SocialMedia