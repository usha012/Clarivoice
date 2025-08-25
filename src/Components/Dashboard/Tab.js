import React from 'react'

export const Tab = ({label, Icon, active, onClick }) => {
  return (
    <div 
        className={"tab " + (active ? "active " : "")}
        onClick={onClick}
    >
        {/* <img src={icon} height="22px" width="22px" /> */}
        <Icon />
        <span>{label}</span>
    </div>
  )
}
