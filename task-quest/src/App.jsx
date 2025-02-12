import { useEffect, useState } from 'react';
import TaskAdd from './components/taskAdd/taskAdd'
import './App.css'
import TaskEdit from './components/taskEdit/taskEdit';
import TaskList from './components/TaskList/TaskList';

function App(){
  const [isInputVisible,setIsInputVisible] = useState(false);  //texstarea表示/非表示
  const [index,setIndex] = useState();  //taskのindex
  const [mode,setMode] = useState(0);  //入力欄をタスク設定と編集に切り替えるための変数
  const [taskEdit,setTaskEdit] = useState("");  //編集後のタスクの内容
  const [taskInput,setTaskInput] = useState("");  //入力されたタスクの内容
  const [tasks,setTasks] = useState([]);  //タスク一覧
  const [tasksDone,setTasksDone] = useState([]);  //完了後タスク一覧


  //タスクを追加する関数
  const addTask = () => {
    if(taskInput.trim() != "") {
      setTasks([...tasks,taskInput]);
      setTaskInput("");
    }
    setIsInputVisible(false);
  }

  //タスクを削除する関数
  const deleteTask = (index) => {
    if (!Array.isArray(tasks)) {
      console.error('tasks is not an array!');
      return;  // tasks が配列でない場合は処理を中断
    }
    const newTasks = tasks.filter((_,i) => i != index);
    setTasks(newTasks);
  }

  //タスクを編集する関数
  const editTask = (index) => {
    if(taskEdit.trim() != "") {
      const newTasks = [...tasks];
      newTasks[index] = taskEdit;
      setTasks(newTasks);
      setTaskEdit("");
    }
    setIsInputVisible(false);
  }

  //完了したタスクを別の場所に移す関数
  const doneTask = (index) => {
    const newTasks = tasks.filter((_,i) => i != index);
    const newtasksDone = [...tasksDone,tasks[index]]
    setTasks(newTasks);
    setTasksDone(newtasksDone)
  }

  // 入力モードにする関数
  const modeInput = () => {
    setMode(0);
  };

  // 編集モードにする関数
  const modeEdit = (index) => {
    setMode(1);
    setIndex(index)  // editTask用のindexを取得
  };

  // テキストエリアを表示させる関数
  useEffect(() => {
    if (mode === 1){
      setIsInputVisible(true);
    };
  },[mode])



  return(
    <div className='body'>
      <header className='header'>
        <h1>Todo</h1>
      </header>
      {/* テキストエリアを表示するボタン */}
      <div className='taskAddButton-container'>
        <TaskAdd onClick={() => {
          setIsInputVisible(true)
          modeInput()} }></TaskAdd>
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
          <TaskEdit onClick={() => {editTask(index);}}></TaskEdit>
        </div>      
      )}
      <h1>タスク一覧</h1>
      <TaskList 
      tasks={tasks} 
      doneTask={doneTask} 
      modeEdit={modeEdit}  
      deleteTask={deleteTask}/>

      <h1>完了タスク一覧</h1>
      <ul>
        {tasksDone.map((task, index) => (<li key={index}>
          {task}
        </li>))}
      </ul>
    </div>
  );
}

export default App
