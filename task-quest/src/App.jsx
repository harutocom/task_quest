import React, { useState } from 'react';
import TaskAdd from './components/taskAdd/taskAdd'
import './App.css'


function App() {
  const [c,p] = useState(0);
  const a = () =>{
    p(c + 1);
  }

  return (
    <div>
      <h1>{c}回</h1>
      <TaskAdd onClick={a}></TaskAdd>
    </div>
  )
}

export default App
