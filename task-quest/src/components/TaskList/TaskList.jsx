import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';
import styles from './TaskList.module.css'

const TaskList = ({tasks, doneTask, modeEdit, deleteTask}) =>{
    return (
    <div className={styles.taskListContainer}>
        <div className={styles.taskList}>
            <h2>タスク一覧</h2>
            <ul>
                {tasks.map((task, index) => (
                    <TaskItem
                    key={index}
                    task={task.name}
                    status={task.status}
                    value={task.value}
                    onDone={() => doneTask(index)}
                    modeEdit={() => modeEdit(index)}
                    onDelete={() => deleteTask(index)}/>
                ))}
            </ul>
        </div>
    </div>
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