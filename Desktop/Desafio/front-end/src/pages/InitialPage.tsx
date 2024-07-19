import { useEffect, useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard";
import "../initialPage.css"


export default function InitialPage(){
    const [val, setVal] = useState();
    const [projects, setProjects] = useState([]);
    
    async function getProjects (){
        const token = localStorage.getItem('token')
        try{
        const response = await api.get('/projects', {
            headers:{
                'authorization': `token ${token}`
            }
        });
        setProjects(response.data.projects);
        } catch(e){
            alert(`Erro inesperado ${e}`);
        }
    }

    useEffect(()=>{
        getProjects();
    },[projects]);

    const handleChange = (e) =>{
        const {value} = e.target;
        setVal(value);
    }
   

    return(
        <>
            <Navbar/>
            <div className="container">
                <div className="side-section">
                    <h2>{val}</h2>
                    <input 
                        type="search" 
                        placeholder="Pesquise um projeto"
                        onChange={handleChange}
                        className="search-input"
                    />
                    <br /><br />
                    <button>+ Criar projeto</button>
                </div>
                <div className="card-grid">
                    {projects.length>0 && projects.map(project=>(
                        <ProjectCard
                            className="card"
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
            </div>
            </div>
        </>
    )
}