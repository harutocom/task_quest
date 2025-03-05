import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../Status/StatusDeleteModal.module.css'

const EditTextArea = ({onChange, taskEdit, editTask, index}) => {

  const inputTextRef = useRef();

  useEffect(() => {
    inputTextRef.current.focus();
  },[])

  const changeTaskEdit = (value) => {
      onChange(value);
  };

  return (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <h3>編集するQUEST内容を入力してください</h3>
      <input type="text" value={taskEdit}
      onChange={(e) => changeTaskEdit(e.target.value)}
      placeholder='内容を入力して'
      ref={inputTextRef}/>
      <button onClick={() => {editTask(index);}}>編集</button>
    </div>
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