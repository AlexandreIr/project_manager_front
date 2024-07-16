import { useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar"

export default function InitialPage(){
    const [val, setVal] = useState();
    let projects;

    async function getProjects (){
        const response = await api.get('/projects');
        projects = response.data;
    }
    getProjects();

    const handleChange = (e) =>{
        const {value} = e.target;
        setVal(value);
        const filterProjects = val!=''?
            projects.filter(project=>{
                return project.title.toLowerCase() == val.toLowerCase()
            })
        :''
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
            {projects&&projects.forEach(project=>(
                <div key={project.id}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    )
}