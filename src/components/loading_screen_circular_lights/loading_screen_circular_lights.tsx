import styles from './loading_screen_circular_lights.module.css'

export function LoadingScreenCircularLights() {
  return (
    <section className={styles.container}>
      <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle
          className={`${styles.pl_ring} ${styles.pl_ring_a}`}
          cx="120"
          cy="120"
          r="105"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 660"
          strokeDashoffset="-330"
          strokeLinecap="round"
        ></circle>
        <circle
          className={`${styles.pl_ring} ${styles.pl_ring_b}`}
          cx="120"
          cy="120"
          r="35"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 220"
          strokeDashoffset="-110"
          strokeLinecap="round"
        ></circle>
        <circle
          className={`${styles.pl_ring} ${styles.pl_ring_c}`}
          cx="85"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        ></circle>
        <circle
          className={`${styles.pl_ring} ${styles.pl_ring_d}`}
          cx="155"
          cy="120"
          r="70"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        ></circle>
      </svg>
    </section>
  )
}
