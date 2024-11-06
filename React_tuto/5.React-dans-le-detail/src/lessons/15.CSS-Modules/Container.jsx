import "./Container.css"
import styles from "./Container.module.css"
import Page from "./Page"
export default function Container() {
console.log(styles)
return (
    <div>
      <h1>CSS Modules</h1>
      <h1 className="title">CSS MODULES</h1>

      <h1 className={styles.title}>CSS MODULES</h1>


      <Page />
    </div>
  )
}
