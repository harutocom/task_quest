const TaskItem = ({task, onDone, onEdit, onDelete}) => {
    return (
        <li>
            <button onClick={onDone}>完了</button>
            {task}
            <button onClick={onEdit}>編集</button>
            <button onClick={onDelete}>削除</button>
        </li>
    );
};

export default TaskItem;