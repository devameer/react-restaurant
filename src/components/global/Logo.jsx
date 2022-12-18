import React from 'react'

const Logo = ({imgSrc,imgAlt}) => {
  return (
    <div>
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
        
    </div>
  )
}

export default Logo