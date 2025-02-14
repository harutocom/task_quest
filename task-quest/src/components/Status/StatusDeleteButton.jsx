import PropTypes from 'prop-types'

const StatusDeleteButton = ({deleteStatus}) => {
  return <button onClick={() => deleteStatus()}>削除</button>
}

StatusDeleteButton.propTypes = {
    deleteStatus: PropTypes.func.isRequired
}

export default StatusDeleteButton