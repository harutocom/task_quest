import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';

const TaskList = ({tasks, doneTask, modeEdit, deleteTask}) =>{
    return (
    <ul>
        {tasks.map((task, index) => (
            <TaskItem 
            key={index} 
            task={task.name}
            status={task.status}
            onDone={() => doneTask(index)} 
            modeEdit={() => modeEdit(index)}
            onDelete={() => deleteTask(index)}/>
        ))}
    </ul>
    )
};

// 引数の型と必須かどうかを定義
// TaskList.p(小文字)ropTypes = {...}
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    doneTask: PropTypes.func.isRequired,
    modeEdit: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;