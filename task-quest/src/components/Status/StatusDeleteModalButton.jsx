import PropTypes from 'prop-types'
import styles from './StatusDeleteModal.module.css'


const StatusDeleteModalButton = ({setIsDeleteModalOpen}) => {
  return <button 
  className={styles.statusSettingButton}
  onClick={() => {setIsDeleteModalOpen(true)}}>ステータス設定</button>;
}

StatusDeleteModalButton.propTypes = {
    setIsDeleteModalOpen: PropTypes.func.isRequired
}

export default StatusDeleteModalButton