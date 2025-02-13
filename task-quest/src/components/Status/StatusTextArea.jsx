import PropTypes from 'prop-types';

const StatusTextArea = ({statusInput, setStatusInput, addStatus}) => {
    const handleChange = (event) => {
        setStatusInput(event.target.value);
    }
  return (
    <div>
        <input type="text" value={statusInput} onChange={handleChange}/>
        <button onClick={addStatus}>追加</button>
    </div>
  )
}

StatusTextArea.propTypes = {
    statusInput: PropTypes.string.isRequired,
    setStatusInput: PropTypes.func.isRequired,
    addStatus: PropTypes.func.isRequired
}

export default StatusTextArea