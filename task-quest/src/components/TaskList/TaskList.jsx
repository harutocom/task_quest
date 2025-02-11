import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';

const TaskList = ({tasks, doneTask, editTask, deleteTask}) =>{
    return (
    <ul>
        {tasks.map((task, index) => (
            <TaskItem 
            key={index} 
            task={task} 
            onDone={doneTask} 
            onEdit={editTask} 
            onDelete={deleteTask}/>
        ))}
    </ul>
    )
};

// 引数の型と必須かどうかを定義
// TaskList.p(小文字)ropTypes = {...}
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    doneTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;