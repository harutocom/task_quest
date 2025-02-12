import TaskEdit from '../taskEdit/taskEdit';
import PropTypes from 'prop-types';

const EditTextArea = ({onChange, taskEdit, editTask, index}) => {
    const changeTaskEdit = (value) => {
        onChange(value);
    };

  return (
    <div className='textarea'>
    <input type="text" value={taskEdit} 
    onChange={(e) => changeTaskEdit(e.target.value)}
    placeholder='内容を入力して'/>
    <TaskEdit onClick={() => {editTask(index);}}></TaskEdit>
  </div>      
  )
}

EditTextArea.propTypes = {
    onChange: PropTypes.func.isRequired,
    taskEdit: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default EditTextArea