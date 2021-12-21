import {useState} from 'react';
const CheckInput = ({children, isChanged, checked}) => {

  return (
    <label className="b-contain" >
      <span>{children}</span>
      <input type="checkbox" checked={checked} onChange={isChanged}/>
      <div className="b-input"></div>
    </label>
  )

}

export default CheckInput;