import styles from './ButtonMore.module.css'

function ButtonMore(props) {
    const buttonClasses = `${styles.buttonMoreView} ${props.disabled ? styles.buttonDisabled : ''}`;

    return (
        <div className={styles.ButtonMore}>
            <div className={buttonClasses}>
                <a href={props.href} rel="noreferrer" target='_blank'><h4>{props.value}</h4></a>
            </div>
        </div>
    )
}

export default ButtonMore
