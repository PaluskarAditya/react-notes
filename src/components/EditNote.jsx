import React from 'react'

export default function EditNote({ curr, setCurr, save }) {
  return (
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
  )
}
