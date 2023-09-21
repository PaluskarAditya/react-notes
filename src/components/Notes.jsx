import React, { useEffect } from 'react'
import Note from './Note'

export default function Notes({ notes, edit, save, toggle, del, curr, setCurr }) {
  return (
    <div className='notes'>
      {
        notes?.length > 0 ? notes?.map(el =><Note key={el.id} toggle={toggle} edit={edit} del={del} setCurr={setCurr} save={save} el={el} curr={curr} /> ) : <h3>No notes</h3>
      }
    </div>
  )
}
