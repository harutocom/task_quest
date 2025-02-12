import TaskAdd from '../taskAdd/taskAdd'
import PropTypes from 'prop-types';

const InputTextArea = ({onChange, taskInput, addTask}) => {
    const changeTaskInput = (value) => {
        onChange(value);
    };

  return (
    <div className='textarea'>
    <input type="text" value={taskInput} 
    onChange={(e) => changeTaskInput(e.target.value)}
    placeholder='内容を入力して'/>
    <TaskAdd onClick={addTask}></TaskAdd>
  </div>
  )
}

InputTextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    taskInput: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired
}

export default InputTextArea