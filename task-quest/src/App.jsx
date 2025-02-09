import { useState } from 'react';
import TaskAdd from './components/taskAdd/taskAdd'
import './App.css'
import TaskDelete from './components/taskDelete/taskDelete';
import TaskEdit from './components/taskEdit/taskEdit';

function App(){
  const [isInputVisible,setIsInputVisible] = useState(false);  //texstarea表示/非表示
  const [index,setIndex] = useState();
  const [mode,setMode] = useState();
  const [taskEdit,setTaskEdit] = useState("");
  const [taskInput,setTaskInput] = useState("");  //入力されたタスクの内容
  const [tasks,setTasks] = useState([]);  //タスク一覧

  const addTask = () => {
    if(taskInput.trim() != "") {
      setTasks([...tasks,taskInput]);
      setTaskInput("");
    }
    setIsInputVisible(false);
  }

  const deleteTask = (index) => {
    if (!Array.isArray(tasks)) {
      console.error('tasks is not an array!');
      return;  // tasks が配列でない場合は処理を中断
    }
    const newTasks = tasks.filter((_,i) => i != index);
    setTasks(newTasks);
  }

  // console.log(isInputVisible);


  const editTask = () => {
    console.log(1)
    if(taskEdit.trim() != "") {
      const newTasks = [...tasks];
      newTasks[index] = taskEdit;
      setTasks(newTasks);
      // tasks[index] = taskEdit;
      setTaskEdit("");
    }
    setIsInputVisible(false);
  }

  return(
    <div className='body'>
      <header className='header'>
        <h1>Todo</h1>
      </header>
      {/* テキストエリアを表示するボタン */}
      <div className='taskAddButton-container'>
        <TaskAdd onClick={() => {
          setIsInputVisible(true)
          setMode(0)} }></TaskAdd>
      </div>
      {/* isInputVisibleがtrueの時テキストエリア表示 */}
      {isInputVisible && mode === 0 && (
        <div className='textarea'>
          <input type="text" value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder='内容を入力して'/>
          <TaskAdd onClick={addTask}></TaskAdd>
        </div>
      )}
      {isInputVisible && mode === 1 && (
          <div className='textarea'>
          <input type="text" value={taskEdit} 
          onChange={(e) => setTaskEdit(e.target.value)}
          placeholder='内容を入力して'/>
          <TaskEdit onClick={editTask}></TaskEdit>
        </div>      
      )}
      <h1>タスク一覧</h1>
      <ul>
        {tasks.map((task, index) => (<li key={index}>
          {task}
          <TaskDelete onClick={() => deleteTask(index)}></TaskDelete>
          <TaskEdit onClick={() => {
            setIsInputVisible(true);
            setMode(1);
            setIndex(index)}}></TaskEdit>
        </li>))}
      </ul>
    </div>
  );
}

export default App
