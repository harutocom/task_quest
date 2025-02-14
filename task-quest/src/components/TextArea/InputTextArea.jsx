import TaskAdd from '../taskAdd/taskAdd'
import PropTypes from 'prop-types';

const InputTextArea = ({onChange, taskInput, addTask, status, selectedValue,
    handleRadioChange, statusValueInput, handleStatusValueChange}) => {
    const changeTaskInput = (value) => {
        onChange(value);
    };

  return (
    <div className='textarea'>
    <input type="text" value={taskInput} 
    onChange={(e) => changeTaskInput(e.target.value)}
    placeholder='内容を入力して'/>
    {status.map((status,index) => (
      <label key={index}>
        <input 
        type="radio"
        name='status'
        value={status.name}
        checked={selectedValue === status.name}
        onChange={() => handleRadioChange(status.name)} />
        {status.name}
      </label>
    ))}
    <input type="number" 
    value={statusValueInput}
    onChange={(e) => {
      const newValue = e.target.value;
      handleStatusValueChange(newValue === '' ? '' : Number(e.target.value) || 0)}}
    placeholder='得られるポイントを入力'
    min={0}/>
    <TaskAdd onClick={addTask}></TaskAdd>
  </div>
  )
}

InputTextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    taskInput: PropTypes.string.isRequired,
    addTask: PropTypes.func.isRequired,
    status: PropTypes.array.isRequired,
    selectedValue: PropTypes.string.isRequired,
    handleRadioChange: PropTypes.func.isRequired,
    statusValueInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleStatusValueChange: PropTypes.func.isRequired
}

export default InputTextArea