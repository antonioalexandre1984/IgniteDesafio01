import style from './Task.module.css'
export function Task() {
    return (
        <div className={style.taskContainer}>
            <label className={style.checkboxContainer}>
                <input type="checkbox" />
                <span className={style.customCheckbox}></span>
            </label>
            <div>
                <p>Integer urna interdum massa libero auctor neque turpis turpis semper.</p>
            </div>
            <div>
                <button>X</button>  
            </div>
        </div>
    )
}