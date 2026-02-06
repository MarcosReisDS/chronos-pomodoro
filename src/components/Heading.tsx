import styles from "./Heading.module.css"

export function Heading(props) {
    return <h1 className={styles.cyen}>{props.children}</h1>
}