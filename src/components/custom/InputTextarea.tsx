import React from 'react'
import './InputTextarea.css'
export const InputTextarea = ({ col,label,value,name,onChange,rows,cols}) => {
  return (
    <div className={`input-textarea__custom col-md-${col}`}>
        <textarea 
        name={name} 
        rows={rows} 
        cols={cols}
        placeholder={label}
        onChange={onChange}
        value={value}
        ></textarea>
    </div>
  )
}
