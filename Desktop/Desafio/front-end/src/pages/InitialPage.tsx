import { api } from "../api";
import Navbar from "../components/Navbar"

export default function InitialPage(){
    const projects = async() =>{
        const project = await api;
        return project;
    };

    return(
        <>
            <Navbar/>
            {projects.forEach(project=>(
                <div key={project.id}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
            ))}
        </>
    )
}