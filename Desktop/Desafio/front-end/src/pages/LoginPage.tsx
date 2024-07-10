import styles from "../Login.module.css"

function LoginPage(){
    return(
        <div className={styles.loginForm}>
        <form action="" method="POST" className={styles.form}>
            <label htmlFor="email">E-mail </label>
            <input type="email" id="email" required className={styles.field} />
            <br />
            <label htmlFor="password">Senha </label>
            <input type="password" id="password" required className={styles.field}/>
            <br />
            <input type="submit" value="Login" className={styles.btn}/>
            <p>Esqueceu sua senha?</p>
        </form>
        </div>
    )
}

export default LoginPage;