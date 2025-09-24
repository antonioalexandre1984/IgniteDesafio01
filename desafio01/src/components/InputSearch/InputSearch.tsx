
import { useState } from 'react'
import style from './InputSearch.module.css'

export function InputSearch() {
    const [newTask,setNewTask] = useState('')

    function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className={style.inputSearch}> 
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={handleNewTaskChange}
                
            />
            <button>  
                Criar
            </button>
        </div>
    )
}