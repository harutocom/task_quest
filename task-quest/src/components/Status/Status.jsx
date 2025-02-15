import PropTypes from 'prop-types';

const Status = ({status}) => {
  return (
    <ul>
        {status.map((statusItem, index) => (<li key={index}>
        {statusItem.name} {' '} {statusItem.value}
        </li>))}
    </ul>
  )
}

Status.propTypes = {
    status: PropTypes.array.isRequired
}

export default Status