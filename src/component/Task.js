import {FaTimes} from 'react-icons/fa'
const Task = ({ task,onDelete,onToggle}) =>{
    return (
        //we want to add reminder toggle in  main div no delte
        <>
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3> {task.text} <FaTimes style={{color:'red', cursor : 'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>

        </div>
        </>
    )
}
export default Task;