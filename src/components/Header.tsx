import styles from './Header.module.css'; 
import rocket from '../assets/rocket.svg';


export function Header(){
    return (
        <header className={styles.header}>
            <div>
            <img src={rocket} alt="logotipo rocket" />
            <p>To</p>
            <p>do</p>
            </div>
            
        </header>
    )
}