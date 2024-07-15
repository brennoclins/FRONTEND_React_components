import styles from './login_screen_1.module.css'

export function LoginScreen1() {
  return (
    <section>
      <div className={styles.loginBox}>
        <form>
          <div className={styles.userBox}>
            <input type="text" name="" required />
            <label>Usuário</label>
          </div>
          <div className={styles.userBox}>
            <input type="password" name="" required />
            <label>Senha</label>
          </div>
          <center>
            <a href="#">
              Enviar
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </section>
  )
}
