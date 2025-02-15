import { useEffect, useState } from 'react';
import './App.css'
import TaskList from './components/TaskList/TaskList';
import TextArea from './components/TextArea/TextArea';
import CompTaskList from './components/CompTaskList/CompTaskList';
import Status from './components/Status/Status';
import StatusDeleteModalButton from './components/Status/StatusDeleteModalButton';
import StatusDeleteModal from './components/Status/StatusDeleteModal';

function App(){
  const [isInputVisible,setIsInputVisible] = useState(false);  //texstarea表示/非表示
  const [index,setIndex] = useState(0);  //taskのindex
  const [mode,setMode] = useState(0);  //入力欄をタスク設定と編集に切り替えるための変数
  const [taskEdit,setTaskEdit] = useState("");  //編集後のタスクの内容
  const [taskInput,setTaskInput] = useState("");  //入力されたタスクの内容
  const [tasks,setTasks] = useState([]);  //タスク一覧
  const [tasksDone,setTasksDone] = useState([]);  //完了後タスク一覧
  const [status,setStatus] = useState([]);  //ステータスの配列
  const [statusInput, setStatusInput] = useState('');  //ステータスの入力
  const [selectedValue, setSelectedValue] = useState('');  //ラジオボタンで現在選ばれている値
  const [statusValueInput, setStatusValueInput] = useState('');  //ステータス値を保持する変数
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);  //ステータス項目の削除モーダルを管理
  const [selectedDeleteStatus, setSelectedDeleteStatus] = useState('');  //選択されている削除するステータスの項目


  //タスクを追加する関数
  const addTask = () => {
    if(taskInput.trim() != "") {
      const newTask = {name: taskInput, status: selectedValue, value: statusValueInput};
      setTasks([...tasks,newTask]);
      setTaskInput("");
      setStatusValueInput('');
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
      newTasks[index].name = taskEdit;
      setTasks(newTasks);
      setTaskEdit("");
    }
    setIsInputVisible(false);
  }

  //完了したタスクを別の場所に移す関数
  const doneTask = (index) => {
    const newTasks = tasks.filter((_,i) => i != index);
    const newtasksDone = [...tasksDone,tasks[index]];
    setTasks(newTasks);
    setTasksDone(newtasksDone);
    const statusIndex = status.findIndex(item => item.name === tasks[index].status);
    status[statusIndex].value += tasks[index].value;
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

  // statusを追加する関数
  const addStatus = () => {
    if(statusInput.trim() != "") {
      const newItem = { name: statusInput, value: 0 };
      setStatus([...status, newItem]);
    }
    setStatusInput('');
    setIsDeleteModalOpen(false);
  }

  const handleDeleteStatusRadioChange = (value) => {
    setSelectedDeleteStatus(value)
  }

  // statusを削除する関数
  const deleteStatus = () => {
    const newStatus = status.filter(item => item.name != selectedDeleteStatus);
    setStatus(newStatus);
    setIsDeleteModalOpen(false);
  }

  // selectedValueを更新する関数
  const handleRadioChange = (value) => {
    setSelectedValue(value)
  }

  const handleStatusValueChange = (value) => {
    setStatusValueInput(value);
  }

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
      mode={mode}
      status={status}
      selectedValue={selectedValue}
      handleRadioChange={handleRadioChange}
      statusValueInput={statusValueInput}
      handleStatusValueChange={handleStatusValueChange}/>

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

      {/* ステータスインプット */}
      {/* <h1>ステータス入力欄</h1>
      <StatusTextArea 
      statusInput={statusInput} 
      setStatusInput={setStatusInput} 
      addStatus={addStatus}/> */}

      {/* ステータス */}
      <h1>ステータス</h1>
      <StatusDeleteModalButton setIsDeleteModalOpen={setIsDeleteModalOpen}/>
      <StatusDeleteModal 
      isDeleteModalOpen={isDeleteModalOpen} 
      status={status} 
      selectedDeleteStatus={selectedDeleteStatus} 
      handleDeleteStatusRadioChange={handleDeleteStatusRadioChange} 
      deleteStatus={deleteStatus}
      setIsDeleteModalOpen={setIsDeleteModalOpen}
      statusInput={statusInput}
      setStatusInput={setStatusInput}
      addStatus={addStatus}/>
      <Status status={status}/>
    </div>
  );
}

export default App
