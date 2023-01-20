import React from 'react'
import "./HeaderOption.css"


export function HeaderOption({Icon, title, onClick = null}) {
  return (   
    <div className='headeroption' onClick={onClick}>
        <Icon />
        {title}
    </div>
  )
}

export function DropdownHeaderOption({Icon, title, onClick = null, Dropdown=null}) {
  return (   
    <div>
      <div className='headeroption' onClick={onClick}>
        <Icon />
        {title}
      </div>
      <Dropdown />
    </div>
  )
}

export default HeaderOption