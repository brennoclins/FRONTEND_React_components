import styles from './loader_progress_bar.module.css'

export function LoaderProgressBar() {
  return (
    <section className={styles.loader_progress_bar}>
      <div className={styles.container}>
        <p className={styles.text}>Loading....</p>
      </div>
    </section>
  )
}
