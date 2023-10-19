import styles from './ButtonMore.module.css'

function ButtonMore(props) {
    return (
        <div className={styles.buttonMoreView}>
            <a href="" target='_blank'><h4>{props.value}</h4></a>
        </div>
    )
}


export default ButtonMore
