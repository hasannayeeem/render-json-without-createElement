import React from 'react'

function Input({field}) {
  return (
    <input 
    name={field.name}
    className={`${field.name}-${field.id}`}
    placeholder={field.attr.placeholder}
    />
  )
}

export default Input