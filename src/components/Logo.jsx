import React from 'react'
import blog from '../Assets/blog.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={blog} width={100} alt="logo" />
    </div>
  )
}

export default Logo