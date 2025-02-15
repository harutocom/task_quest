import PropTypes from 'prop-types';

const Status = ({status}) => {
  return (
    <div>
      <ul>
        {status.map((statusItem, index) => (<li key={index}>
        {statusItem.name} {' '} {statusItem.value}
        </li>))}
      </ul>
    </div>
  )
}

Status.propTypes = {
    status: PropTypes.array.isRequired
}

export default Status