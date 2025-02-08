import styled from 'styled-components';

const TaskDelete = ({onClick}) => {
    return <StyledTaskDelete className="taskDelete" onClick={onClick}>ボタン</StyledTaskDelete>;
}

const StyledTaskDelete = styled.button`
    background-image: url(../../assets/delete_icon.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

export default TaskDelete;