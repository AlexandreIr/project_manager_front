import { api } from "../api";
import styles from "../Login.module.css";
import { useForm } from "react-hook-form";

function LoginForm(){
    
    const {register, handleSubmit} = useForm();

    const authenticate = async(fields)=>{
        const response = await api.post('/auth', {
            email:fields.email,
            password:fields.password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('loggedUser', response.data.user.id);
        console.log(response);
    }

    return(
        <div className={styles.loginForm}>
        <form onSubmit={handleSubmit(authenticate)} className={styles.form}>
            <h2>Login</h2>
            <label htmlFor="email">E-mail </label>
            <input type="email" id="email" {...register("email")} autoFocus required className={styles.field} />
            <br />
            <label htmlFor="password">Senha </label>
            <input type="password" id="password" {...register("password")} required className={styles.field}/>
            <br />
            <input type="submit" value="Login" className={styles.btn}/>
            <p>Esqueceu sua senha?</p>
            <p>Ainda não tem cadastro? <span>Clique aqui</span></p>
        </form>
        </div>
    )
}

export default LoginForm;