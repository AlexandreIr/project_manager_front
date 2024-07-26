import '../initialPage.css'
import { api } from '../api';

const ProjectCard = (props)=>{

    const excludeFn = async() =>{
        const id = parseInt(props.id);
        const token = localStorage.getItem('token');
        const confirmation = confirm(`Deseja realmente excluir o projeto ${props.title}`);
        if(confirmation){
            try{
                await api.delete(`/project/${id}`,{
                    headers:{
                        'Authorization': `token ${token}`
                    }
                });
            } catch(e){
                alert(`Erro inesperado ${e}`);
            }
        }
    }


    return(
        <div className='card'>
            <h2>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <button onClick={excludeFn}>Excluir projeto</button>
        </div>
    )
}

export default ProjectCard;