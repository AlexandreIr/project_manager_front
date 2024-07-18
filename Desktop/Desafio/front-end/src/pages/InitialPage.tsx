import { useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar"


export default function InitialPage(){
    const [val, setVal] = useState('');
    const [projects, setProjects] = useState([]);

    async function getProjects (){
        const token = localStorage.getItem('token')
        const response = await api.get('/projects', {
                headers:{
                'authorization': `token ${token}`
            }
        });
        setProjects(response.data);
        console.log(projects);
    } 


    const handleChange = (e) =>{
        const {value} = e.target;
        setVal(value);
    }
   

    return(
        <>
            <Navbar/>
            <h2>{val}</h2>
            <input 
                type="search" 
                placeholder="Pesquise por um projeto"
                onChange={handleChange}
            />
            <br /><br />
            <button>+ Criar novo projeto</button>
            {projects.length>0 && projects.map(project=>(
                <div key={project.id}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <button>Excluir projeto</button>
                </div>
            ))}
        </>
    )
}