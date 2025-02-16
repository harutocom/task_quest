import PropTypes from 'prop-types';
import styles from './CompTaskList.module.css'

const CompTaskList = ({tasksDone}) => {
  return (
    <div className={styles.compTaskList}>
        <h2>完了タスク一覧</h2>
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