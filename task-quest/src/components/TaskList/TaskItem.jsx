import PropTypes from 'prop-types';


const TaskItem = ({task, status, value, onDone, modeEdit, onDelete}) => {
    return (
        <li>
            <button onClick={onDone}>完了</button>
            {task}{' '}{status}{' '}{value}
            <button onClick={modeEdit}>編集</button>
            <button onClick={onDelete}>削除</button>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onDone: PropTypes.func.isRequired,
    modeEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TaskItem;