import React from 'react'
import './Video.css'
import PlayVideo1 from '../../Components/PlayVideo1/PlayVideo1'
import Recommended from '../../Components/Recommended/Recommended'
const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo1 />
      <Recommended />
    </div>
  )
}

export default Video
