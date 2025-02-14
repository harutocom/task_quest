import TaskDone from "../taskDone/taskDone";
import TaskEdit from "../taskEdit/taskEdit";
import TaskDelete from "../taskDelete/taskDelete";
import PropTypes from 'prop-types';


const TaskItem = ({task, status, value, onDone, modeEdit, onDelete}) => {
    return (
        <li>
            <TaskDone onClick={onDone}>完了</TaskDone>
            {task}{' '}{status}{' '}{value}
            <TaskEdit onClick={modeEdit}>編集</TaskEdit>
            <TaskDelete onClick={onDelete}>削除</TaskDelete>
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