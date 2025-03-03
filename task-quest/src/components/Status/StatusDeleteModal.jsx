import PropTypes from 'prop-types';
import styles from './StatusDeleteModal.module.css'
import StatusDeleteButton from './StatusDeleteButton';
import StatusTextArea from './StatusTextArea';

const StatusDeleteModal = ({isDeleteModalOpen, status, selectedDeleteStatus, 
    handleDeleteStatusRadioChange, deleteStatus, setIsDeleteModalOpen,
    statusInput, setStatusInput, addStatus}) => {
  return (
    <div>
        {isDeleteModalOpen && (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h3>追加するステータス項目を入力してください</h3>
                    <StatusTextArea
                    statusInput={statusInput}
                    setStatusInput={setStatusInput}
                    addStatus={addStatus}/>
                    {status.length == 0 ? (
                        <h3>削除できるステータス項目はありません</h3>
                    ) : (
                        <h3>削除するステータス項目を選んでください</h3>
                    )}
                    {status.map((element, index) => (
                        <label key={index} >
                            <input
                            type="radio"
                            name='deleteStatus'
                            value={element.name}
                            checked={selectedDeleteStatus === element.name}
                            onChange={() => handleDeleteStatusRadioChange(element.name)} />
                            {element.name}
                        </label>
                    ))}
                    <StatusDeleteButton deleteStatus={deleteStatus} setIsDeleteModalOpen={setIsDeleteModalOpen}/>
            </div>
        </div>

        )}
        
    </div>
  )
}

StatusDeleteModal.propTypes = {
    isDeleteModalOpen: PropTypes.bool.isRequired,
    status: PropTypes.array.isRequired,
    selectedDeleteStatus: PropTypes.string,
    handleDeleteStatusRadioChange: PropTypes.func.isRequired,
    deleteStatus: PropTypes.func.isRequired,
    setIsDeleteModalOpen: PropTypes.func.isRequired,
    statusInput: PropTypes.string,
    setStatusInput: PropTypes.func.isRequired,
    addStatus: PropTypes.func.isRequired
}

export default StatusDeleteModal