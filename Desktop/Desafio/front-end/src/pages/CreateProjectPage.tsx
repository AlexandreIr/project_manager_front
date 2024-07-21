import axios from "axios"
import { useForm } from "react-hook-form"


export default function CreateProjectPage(){
    const {register, handleSubmit, reset} = useForm();

    const createProject = async(fields) =>{
        try{
            const token = localStorage.getItem('token');
            await axios.post('project',{
                headers:{
                    'authorization': `token ${token}`
                },
                data:{
                    fields
                }}
            )
            reset({title:'', description:''});
        } catch (e) {
            alert('Erro inesperado ao salvar projeto')
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(createProject)}>
                <label htmlFor="projectName">Nome do projecto:</label>
                <input type="text" id="projectName" required autoFocus {...register('name')}/>
                <label htmlFor="projectDescription">Descrição do projecto:</label>
                <input type="text" id="projectDescription" required {...register('description')} />
                <button>Criar projeto</button>
            </form>
        </>
    )
}