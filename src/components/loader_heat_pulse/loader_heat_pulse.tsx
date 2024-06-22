import styles from './loader_heat_pulse.module.css'

export function LoaderHeatPulse() {
  return (
    <section className={styles.container}>
      <div className={styles.loading}>
        <svg>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 148, 63 0, 80 124, 164 124"
            id={styles.back}
          ></polyline>
          <polyline
            points="0.157 23.954, 14 23.954, 21.843 148, 63 0, 80 124, 164 124"
            id={styles.front}
          ></polyline>
        </svg>
      </div>
    </section>
  )
}
