import style from './Header.module.css'
import  rocket  from '../../assets/rocket.svg'
export function Header() {
    return (
        <header className={style.header}>
              
            <img src={rocket} alt="logotipo do desafio rocket" />
            <div>  
                <p>to<span>do</span></p>
            </div>
        </header>
    )
}