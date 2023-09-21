import React from 'react'
import Note from './Note'
import EditNote from './EditNote'

export default function Notes({ notes, edit, save, toggle, del, curr, setCurr }) {
  return (
    <div className='notes'>
      {
        notes?.length > 0 ? notes?.map(el =><Note key={el.id} toggle={toggle} edit={edit} del={del} setCurr={setCurr} save={save} el={el} curr={curr} /> ) : <div className='no-notes'><h3>No notes</h3></div>
      }
      <EditNote curr={curr} setCurr={setCurr} save={save} />
    </div>
  )
}
