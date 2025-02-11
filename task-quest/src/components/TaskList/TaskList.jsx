import TaskItem from "./TaskItem";

const TaskList = ({tasks, doneTask, editTask, deleteTask}) =>{
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
};

export default TaskList;