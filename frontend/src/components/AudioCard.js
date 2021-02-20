import React from 'react'
import parse from 'html-react-parser';

const AudioCard = (props) => {

  const { id, name, link } = props
  
  return (
      parse(link)
  )
}

export default AudioCard
