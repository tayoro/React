import styles from "./Container.module.css"
export default function page(){
    console.log(styles)
    return(
        <div>
            <h1 className={styles.title}>titre</h1>
        </div>
    )
}