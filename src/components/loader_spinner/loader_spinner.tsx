import styles from './loader_spinner.module.css'

export function LoaderSpinner() {
  return (
    <section>
      <div className={styles.spinner}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}
