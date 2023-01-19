
import styles from './styles/containerzudo.module.css'

function Containerzudo(props){
    return(
        <div className={`${styles.containerzudo} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
};

export default Containerzudo;