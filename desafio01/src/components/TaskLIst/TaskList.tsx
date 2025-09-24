import { Task } from '../Task/Task'
import style from './TaskList.module.css'
import  Clipboard  from '../../assets/clipboard.svg'
import { useState } from 'react'

export function TaskList() {
    const [tasks, setTasks] = useState(['']);

    return (
        <div className={style.taskContainer}>
            <div className={style.taskHeader}>
                <div className={style.taskCreated}>
                    <strong>Tarefas criadas</strong>
                    <span>3</span>
                </div>
                <div className={style.taskCompleted}>
                    <strong>Concluídas</strong>
                    <span>2 de 3</span>
                </div>    
            </div>
            <img src={Clipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
            <Task />
            <Task />
            <Task /> 
        </div>
    )
}