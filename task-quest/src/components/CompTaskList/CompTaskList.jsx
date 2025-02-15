import PropTypes from 'prop-types';

const CompTaskList = ({tasksDone}) => {
  return (
    <div>
        <h1>完了タスク一覧</h1>
        <ul>
            {tasksDone.map((task, index) => (<li key={index}>
            {task.name}
            </li>))}
        </ul>
    </div>
    );
};

CompTaskList.propTypes = {
    tasksDone: PropTypes.array.isRequired
}

export default CompTaskList;