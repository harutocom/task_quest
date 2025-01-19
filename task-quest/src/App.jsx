import React, { useState } from 'react';
import TaskAdd from './components/taskAdd/taskAdd'
import './App.css'


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
  return(
    <div style={{padding: "20px"}}>
      <h1>タスクエ</h1>
      {/* テキストエリアを表示するボタン */}
      <TaskAdd onClick={() => setIsInputVisible(true)}>QEST作成</TaskAdd>
      {/* isInputVisibleがtrueの時テキストエリア表示 */}
      {isInputVisible && (
        <div>
          <input type="text" value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder='クエスト内容を入力して'/>
          <TaskAdd onClick={addTask}>QEST追加</TaskAdd>
        </div>
      )}
      <h1>QEST一覧</h1>
      <ul>
        {tasks.map((task, index) => (<li key={index}>{task}</li>))}
      </ul>
    </div>
  );
}

export default App
