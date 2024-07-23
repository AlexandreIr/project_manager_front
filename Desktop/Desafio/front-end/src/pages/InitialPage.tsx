import { useEffect, useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard";
import "../initialPage.css"
import { Link } from "react-router-dom";


export default function InitialPage(){
    const [val, setVal] = useState();
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState();
    
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
        } catch(e){
            alert(`Erro inesperado ${e}`);
        }
    }

    useEffect(()=>{
        getProjects();
    },[]);

    const handleChange = (e) =>{
        const {value} = e.target;
        setVal(value);
        projects.filter(p => p.title.toLowerCase()==val.toLowerCase());
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
                    {projects.length>0 && projects.map(project=>(
                        // <Link to={`/project/${project.title}`}>
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                description={project.description}
                            />
                        // </Link>
                    ))}
            <button className="sticky-btn" onClick={scrollToTop}>&#x21E7;</button>
            </div>
            </div>
        </>
    )
}