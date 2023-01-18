import React from 'react'
import "./HeaderOption.css"


function HeaderOption({Icon, title}) {
  return (   
    <div className='headeroption'>
        <Icon />
        {title}
    </div>
  )
}



export default HeaderOption