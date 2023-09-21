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
      <div id='modal'>
        <div className='edit'>
          <div className='inp-div'>
            <input value={curr.text} onChange={e => setCurr({ ...curr, text: e.target.value })} />
          </div>
          <div className='edit-div'>
            <button onClick={() => save(curr.id)}>save</button>
            <button onClick={() => document.getElementById('modal').style.display = "none"}>close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
