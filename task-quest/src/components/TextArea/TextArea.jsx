import TaskAdd from "../taskAdd/taskAdd"
import InputTextArea from "./InputTextArea"
import EditTextArea from "./EditTextArea"
import PropTypes from 'prop-types';

function TextArea({setIsInputVisible,modeInput,isInputVisible,changeTaskInput,
    taskInput,addTask,changeTaskEdit,taskEdit,editTask,index,mode}) {
  return (
    <div>
        {/* テキストエリアを表示するボタン */}
        <div className='taskAddButton-container'>
        <TaskAdd onClick={() => {
            setIsInputVisible(true)
            modeInput()} }></TaskAdd>
        </div>
        {/* isInputVisibleがtrueの時テキストエリア表示 */}
        {isInputVisible && mode === 0 && (
        <InputTextArea 
        onChange={changeTaskInput} 
        taskInput={taskInput} 
        addTask={addTask}/>
        )}
        {isInputVisible && mode === 1 && (
        <EditTextArea 
        onChange={changeTaskEdit} 
        taskEdit={taskEdit} 
        editTask={editTask}
        index={index}/>
        )}
</div>
  )
}

TextArea.propTypes = {
    setIsInputVisible: PropTypes.func.isRequired,
    modeInput: PropTypes.func.isRequired,
    isInputVisible: PropTypes.bool.isRequired,
    changeTaskInput: PropTypes.func.isRequired,
    taskInput: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired,
    changeTaskEdit: PropTypes.func.isRequired,
    taskEdit: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    mode: PropTypes.number.isRequired
}


export default TextArea;