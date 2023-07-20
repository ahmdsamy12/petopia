import React from 'react'
import "./main-heading.css"

const MainHeading = (props : {parg: string, head: string}) => {
  return (
    <div className='main-heading'>
        <p>{props.parg}</p>
        <h3>{props.head}</h3>
    </div>
  )
}

export default MainHeading;