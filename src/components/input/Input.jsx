import React from 'react';
import "./input.css"

export default function Input(props) {
  return (
    <div className='inputBlock'>
      <input type={props.type} placeholder={props.placeholder}/>
      <span className="line"></span>
    </div>
  )
}
