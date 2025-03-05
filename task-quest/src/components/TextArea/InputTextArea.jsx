import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../Status/StatusDeleteModal.module.css'

const InputTextArea = ({onChange, taskInput, addTask, status, selectedValue,
    handleRadioChange, statusValueInput, handleStatusValueChange}) => {

      const inputTextRef = useRef();
      // const inputNumRef = useRef();

      useEffect(() => {
        inputTextRef.current.focus();
      },[])

    const changeTaskInput = (value) => {
        onChange(value);
    };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>追加するQUEST内容を入力してください</h3>
        <input type="text" value={taskInput}
        onChange={(e) => changeTaskInput(e.target.value)}
        placeholder='内容を入力して'
        ref={inputTextRef}/>
        <h3>完了時に伸びるステータスを選択してください</h3>
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
        <h3>完了時に得られるステータス値を入力してください</h3>
        <input type="number"
        value={statusValueInput}
        onChange={(e) => {
          const newValue = e.target.value;
          handleStatusValueChange(newValue === '' ? '' : Number(e.target.value) || 0
        )}}
        placeholder='得られるポイントを入力'
        min={0}/>
        <button onClick={addTask}>追加</button>
      </div>
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