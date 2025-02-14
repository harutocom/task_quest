import PropTypes from 'prop-types';
import styles from './StatusDeleteModal.module.css'

const StatusDeleteModal = ({isDeleteModalOpen, status, selectedDeleteStatus, handleDeleteStatusRadioChange}) => {
  return (
    <div>
        {isDeleteModalOpen && (
            <div className={styles.modalOverlay}>
                <div className={styles.modalContent}>
                    <h3>削除するステータス項目を選んでください</h3>
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
}

export default StatusDeleteModal