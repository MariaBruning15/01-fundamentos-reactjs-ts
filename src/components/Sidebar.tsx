import { Avatar } from './Avatar.tsx';
import styles from './sidebar.module.css';
import { PencilLine }from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1510936994138-07e06c7c5add?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
        <div className={styles.profile}>
            <Avatar hasBorder src="https://avatars.githubusercontent.com/u/116197683?v=4"/>    
            <strong>Maria Eduarda Bruning</strong>
            <span>Estudante</span>
        </div>

        <footer>
            <a href="#">
                <PencilLine size={20}></PencilLine>
                Editar seu perfil
            </a>
        </footer>
        
        </aside>
    )

}