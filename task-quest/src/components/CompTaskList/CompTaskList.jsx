import PropTypes from 'prop-types';

const CompTaskList = ({tasksDone}) => {
  return (
    <ul>
        {tasksDone.map((task, index) => (<li key={index}>
        {task}
        </li>))}
    </ul>
    );
};

CompTaskList.propTypes = {
    tasksDone: PropTypes.array.isRequired
}

export default CompTaskList;