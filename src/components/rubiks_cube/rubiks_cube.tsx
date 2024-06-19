import styles from './rubiks_cube.module.css'

const side = ['front', 'back', 'left', 'right', 'top', 'bottom']

const colors = [
  '#330000',
  '#660000',
  '#990000',
  '#e60000',
  '#ff3333',
  '#ff8080',
  '#ffb3b3',
  '#ffcccc',
  '#ffe6e6',
]

export function RubiksCube() {
  return (
    <section>
      <div className={styles.my_loader}>
        <div className={styles.rubiks_cube}>
          {side.map((num) => (
            <div key={num} className={`${styles.face} ${styles[num]}`}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{ background: color }}
                  className={styles.cube}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
