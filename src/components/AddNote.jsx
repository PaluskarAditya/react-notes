import React from 'react'

export default function AddNote({ add, text, setText }) {
  return (
    <div className='inp-grp'>
      <input type='text' value={text} placeholder='make dinner...' onChange={e => setText(e.target.value)} />
      <button onClick={add}>add</button>
    </div>
  )
}
