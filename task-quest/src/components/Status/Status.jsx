import PropTypes from 'prop-types';
import StatusDeleteModalButton from './StatusDeleteModalButton';
import StatusDeleteModal from './StatusDeleteModal';
import styles from './StatusDeleteModal.module.css'

const Status = ({status, setIsDeleteModalOpen, isDeleteModalOpen, selectedDeleteStatus, 
  handleDeleteStatusRadioChange, deleteStatus, statusInput, setStatusInput, addStatus}) => {
  return (
    <div className={styles.status}>
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
      <div className={styles.statusArea}>
        {status.length == 0 ? (
          <h2>ステータスを追加してください</h2>
        ):(
        <ul>
          {status.map((statusItem, index) => (<li key={index}>
          {statusItem.name} {' '} {statusItem.value}
          </li>))}
        </ul>
)}
      </div>
    </div>
  )
}

Status.propTypes = {
  status: PropTypes.array.isRequired,
  setIsDeleteModalOpen: PropTypes.func.isRequired,
  isDeleteModalOpen: PropTypes.bool.isRequired,
  selectedDeleteStatus: PropTypes.string,
  handleDeleteStatusRadioChange: PropTypes.func.isRequired,
  deleteStatus: PropTypes.func.isRequired,
  statusInput: PropTypes.string,
  setStatusInput: PropTypes.func.isRequired,
  addStatus: PropTypes.func.isRequired
}

export default Status