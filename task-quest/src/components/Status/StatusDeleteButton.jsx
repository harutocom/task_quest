import PropTypes from 'prop-types'

const StatusDeleteButton = ({deleteStatus,setIsDeleteModalOpen}) => {
  return (
    <div>
        <button onClick={() => setIsDeleteModalOpen(false)}>閉じる</button>
        <button onClick={() => deleteStatus()}>削除</button>
    </div>
  )
}

StatusDeleteButton.propTypes = {
    deleteStatus: PropTypes.func.isRequired,
    setIsDeleteModalOpen: PropTypes.func.isRequired
}

export default StatusDeleteButton