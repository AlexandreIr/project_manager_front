import { useForm } from "react-hook-form"
import Navbar from "../components/Navbar";
import "../CreateProject.css"
import { api } from "../api";


export default function CreateProjectPage(){
    const {register, handleSubmit, reset} = useForm();

    const createProject = async(fields) =>{
        const token = localStorage.getItem('token')
        try{
            await api.post('/project',fields,{
                headers:{
                    'authorization': `token ${token}`
                }
            })
        } catch (e) {
            alert('Erro inesperado ao salvar projeto')
        }
        reset({title:'', description:''});
    }


    return (
        <>
        <Navbar/>
        <div className="form-box">
            <form onSubmit={handleSubmit(createProject)} >
                <label htmlFor="projectName">Nome do projeto:</label>
                <br />
                <input type="text" id="projectTitle" required autoFocus {...register('title')}/>
                <br /><br />
                <label htmlFor="projectDescription">Descrição do projeto:</label>
                <br />
                <textarea id="projectDescription" required {...register('description')} />
                <br /><br />
                <button onSubmit={createProject}>Criar projeto</button>
            </form>
        </div>
        </>
    )
}