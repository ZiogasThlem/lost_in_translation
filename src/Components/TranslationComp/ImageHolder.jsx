import React from 'react'

const ImageHolder = ({sign}) => {
  return (
    <img src={sign.src} alt={sign.name}
     width='70' height='70'/>
  )
}

export default ImageHolder