import PropTypes from 'prop-types';
import StatusDeleteModalButton from './StatusDeleteModalButton';
import StatusDeleteModal from './StatusDeleteModal';

const Status = ({status, setIsDeleteModalOpen, isDeleteModalOpen, selectedDeleteStatus, 
  handleDeleteStatusRadioChange, deleteStatus, statusInput, setStatusInput, addStatus}) => {
  return (
    <div>
      <h2>ステータス</h2>
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
      <ul>
        {status.map((statusItem, index) => (<li key={index}>
        {statusItem.name} {' '} {statusItem.value}
        </li>))}
      </ul>
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