import { useState } from 'react';
import TaskAdd from './components/taskAdd/taskAdd'
import './App.css'
import TaskDelete from './components/taskDelete/taskDelete';

function App(){
  const [isInputVisible,setIsInputVisible] = useState(false);  //texstarea表示/非表示
  const [taskInput,setTaskInput] = useState("");  //入力されたタスクの内容
  const [tasks,setTasks] = useState([]);  //タスク一覧

  const addTask = () => {
    if(taskInput.trim() != "") {
      setTasks([...tasks,taskInput]);
      setTaskInput("");
    }
  }

  const deleteTask = (index) => {
    if (!Array.isArray(tasks)) {
      console.error('tasks is not an array!');
      return;  // tasks が配列でない場合は処理を中断
    }
    const newTasks = tasks.filter((_,i) => i != index);
    setTasks(newTasks);
  }

  return(
    <div className='body'>
      <header className='header'>
        <h1>Todo</h1>
      </header>
      {/* テキストエリアを表示するボタン */}
      <div className='taskAddButton-container'>
        <TaskAdd onClick={() => setIsInputVisible(true)}></TaskAdd>
      </div>
      {/* isInputVisibleがtrueの時テキストエリア表示 */}
      {isInputVisible && (
        <div className='textarea'>
          <input type="text" value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder='内容を入力して'/>
          <TaskAdd onClick={addTask}></TaskAdd>
        </div>
      )}
      <h1>タスク一覧</h1>
      <ul>
        {tasks.map((task, index) => (<li key={index}>
          {task}
          <TaskDelete onClick={() => deleteTask(index)}></TaskDelete>
        </li>))}
      </ul>
    </div>
  );
}

export default App
