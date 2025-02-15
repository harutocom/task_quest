import PropTypes from 'prop-types'

const StatusDeleteModalButton = ({setIsDeleteModalOpen}) => {
  return <button onClick={() => {setIsDeleteModalOpen(true)}}>ステータス設定</button>;
}

StatusDeleteModalButton.propTypes = {
    setIsDeleteModalOpen: PropTypes.func.isRequired
}

export default StatusDeleteModalButton