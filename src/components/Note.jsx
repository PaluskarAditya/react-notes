import React from 'react'

export default function Note({ toggle, edit, del, setCurr, save, el, curr }) {
  return (
    <div className='note'>
      <div className='info'>
        <p onClick={() => toggle(el)} id={el.id}>{el.text.charAt(0).toUpperCase() + el.text.slice(1)}</p>
      </div>
      <div className='actions'>
        <button onClick={() => edit(el)}>edit</button>
        <button onClick={() => del(el.id)}>delete</button>
      </div>
    </div>
  )
}
