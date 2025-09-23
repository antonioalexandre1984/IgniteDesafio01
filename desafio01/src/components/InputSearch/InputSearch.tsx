import { PlusCircle } from 'phosphor-react'
import style from './InputSearch.module.css'

export function InputSearch() {
    return (
        <div className={style.inputSearch}> 
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
                <PlusCircle size={32} />
                Criar
            </button>
        </div>
    )
}