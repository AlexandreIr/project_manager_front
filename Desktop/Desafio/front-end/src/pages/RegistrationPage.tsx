import styles from "../Login.module.css";
import { useForm } from "react-hook-form";

function LoginPage(){
    
    const {register, handleSubmit} = useForm();

    const authenticate = (fields)=>{
        alert(JSON.stringify(fields));
    }

    return(
        <div className={styles.loginForm}>
        <form onSubmit={handleSubmit(authenticate)} className={styles.form}>
            <h2>Registro</h2>
            <label htmlFor="name">Nome </label>
            <input type="text" id="name" {...register("name")} autoFocus required className={styles.field} />
            <label htmlFor="email">E-mail </label>
            <input type="email" id="email" {...register("email")} autoFocus required className={styles.field} />
            <br />
            <label htmlFor="password">Senha </label>
            <input type="password" id="password" {...register("password")} required className={styles.field}/>
            <br />
            <input type="submit" value="Login" className={styles.btn}/>
            <p>Esqueceu sua senha?</p>
            <p>Ainda não tem cadastro? Clique aqui</p>
        </form>
        </div>
    )
}

export default LoginPage;