import { useEffect, useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard";
import "../initialPage.css"
import { Link } from "react-router-dom";


export default function InitialPage(){
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState();
    const [filteredProjects, setFilteredProjects] = useState([]);
    
    async function getProjects (){
        const token = localStorage.getItem('token')
        try{
        const response = await api.get('/projects', {
            headers:{
                'authorization': `token ${token}`
            }
        });
        setProjects(response.data.projects);
        setUser(response.data.user);
        setFilteredProjects(response.data.projects);
        } catch(e){
            alert(`Erro inesperado ${e}`);
        }
    }

    useEffect(()=>{
        getProjects();
    },[]);

    const handleChange = (e) =>{
        const {value} = e.target;
        setFilteredProjects(value!=''?
            projects.filter(p => 
                p.title.toLowerCase().
                includes(value.toLowerCase()))
            :projects);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return(
        <>
            <Navbar user={user?.name}/>
            <div className="container">
                <div className="side-section">
                    <input 
                        type="search" 
                        placeholder="Pesquise por um projeto"
                        onChange={handleChange}

                        className="search-input"
                    />
                    <br /><br />
                    <Link to={'/create'}>
                        <button>+ Criar projeto</button>
                    </Link>
                </div>
                <br />
                <h1>Meus Projetos</h1>
                <div className="card-grid">
                    {filteredProjects.length>0 && filteredProjects.map(project=>(
                        <Link to={`/project/${project.id}`}>
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                            />
                        </Link>
                    ))}
            <button className="sticky-btn" onClick={scrollToTop}>&#x21E7;</button>
            </div>
            </div>
        </>
    )
}