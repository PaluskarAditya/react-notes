import { useEffect, useState } from 'react';
import './App.css';
import Notes from './components/Notes';
import AddNote from './components/AddNote';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')))

  const [curr, setCurr] = useState({ id: "", text: "", completed: "" })

  const [text, setText] = useState('')

  const add = () => {
    if (text.length > 0) {
      const newNote = {
        id: new Date().getTime(),
        text,
        completed: false
      }
      setNotes([...notes, newNote])
      setText('')
    } else {
      alert('Note cannot be empty...')
    }
  }

  const save = (id) => {
    const updatedTodos = notes?.map((todo) =>
      todo.id === id ? { ...todo, text: curr.text } : todo
    );
    setNotes(updatedTodos);
    document.getElementById('modal').style.display = "none"
  }

  const toggle = (note) => {
    const nt = document.getElementById(note.id)
    note.completed = !note.completed
    note.completed ? nt.classList.add('dashed') : nt.classList.remove('dashed')
  }

  const edit = (note) => {
    document.getElementById('modal').style.display = "flex"
    setCurr({ text: note.text, id: note.id, completed: note.completed })
  }

  const del = (id) => {
    setNotes(notes.filter(el => el.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
      <h1>Serverless Notes</h1>
      <AddNote add={add} text={text} setText={setText} />
      <Notes notes={notes} del={del} save={save} edit={edit} toggle={toggle} curr={curr} setCurr={setCurr} />
    </div>
  );
}

export default App;
