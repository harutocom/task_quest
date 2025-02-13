import PropTypes from 'prop-types';

const Status = ({status}) => {
  return (
    <ul>
        {status.map((statusItem, index) => (<li key={index}>
        {statusItem.name}
        </li>))}
    </ul>
  )
}

Status.propTypes = {
    status: PropTypes.array.isRequired
}

export default Status