import axios from 'axios';
import '../initialPage.css'

const ProjectCard = (props)=>{
    const excludeFn = () =>{
        const confirmation = confirm(`Deseja realmente excluir o projeto ${props.title}`);
        if(confirmation){
            axios.delete
        }
    }


    return(
        <div className={props.className}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={excludeFn}>Excluir projeto</button>
        </div>
    )
}

export default ProjectCard;