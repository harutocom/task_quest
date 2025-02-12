import { useEffect, useState } from 'react';
import './App.css'
import TaskList from './components/TaskList/TaskList';
import TextArea from './components/TextArea/TextArea';
import CompTaskList from './components/CompTaskList/CompTaskList';

function App(){
  const [isInputVisible,setIsInputVisible] = useState(false);  //texstarea表示/非表示
  const [index,setIndex] = useState(0);  //taskのindex
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

  // taskInputを更新する関数
  const changeTaskInput = (newTaskInput) => {
    setTaskInput(newTaskInput);
  };

  // taskEditを更新する関数
  const changeTaskEdit = (newTaskEdit) => {
    setTaskEdit(newTaskEdit);
  };

  return(
    <div className='body'>
      <header className='header'>
        <h1>Todo</h1>
      </header>

      {/* テキストエリア */}
      <TextArea
      setIsInputVisible={setIsInputVisible}
      modeInput={modeInput}
      isInputVisible={isInputVisible}
      changeTaskInput={changeTaskInput}
      taskInput={taskInput}
      addTask={addTask}
      changeTaskEdit={changeTaskEdit}
      taskEdit={taskEdit}
      editTask={editTask}
      index={index}
      mode={mode}/>

      {/* タスク一覧 */}
      <h1>タスク一覧</h1>
      <TaskList 
      tasks={tasks} 
      doneTask={doneTask} 
      modeEdit={modeEdit}  
      deleteTask={deleteTask}/>

      {/* 完了タスク一覧 */}
      <h1>完了タスク一覧</h1>
      <CompTaskList tasksDone={tasksDone}/>
    </div>
  );
}

export default App
