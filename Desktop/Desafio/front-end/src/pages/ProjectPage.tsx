import { useEffect, useState } from "react";
import { api } from "../api";
import Navbar from "../components/Navbar";
import "../ProjectPage.css";
import { useParams } from "react-router-dom";

function ProjectPage(){
    const [tasks, setTasks] = useState([]);
    const {id} = useParams();
    const [projectInfo, setProjectInfo] = useState({});
    const [inputId, setInputId] = useState(1);


    // const loadTasks = async()=>{
    //     const token = localStorage.getItem('token');
    //     try{
    //         const response =api.get('/tasks', {
    //             headers:{
    //                 'authorization': `token ${token}`
    //             }
    //         })
    //         setTasks(response.data);
    //     } catch (err) {
    //         alert(`Erro inesperado: ${err}`);
    //     }
    // };

    const loadProjectInfo = async()=>{
        const token = localStorage.getItem('token');
        try{
            const response = await api.get(`/project/${id}`,{
                headers:{
                    'authorization': `token ${token}`
                }
            });
            console.log(response)
            setProjectInfo(response.data);
        } catch(err){
            alert(`Erro inesperado: ${err}`);
        }
    }

    const createTask = async()=>{
        const todo = document.querySelector('.tasks');
        const input = document.createElement('input');
        input.setAttribute('id', `inputId ${inputId}`);
        const span = document.createElement('span');
        span.innerHTML='&#9747;';
        input.classList.add('task-input');
        todo?.append(input,span)
        setInputId(prev=>prev+1);
    }

    useEffect(()=>{
        // loadTasks();
        loadProjectInfo();
    },[]);

    return(
        <>
        <Navbar/>
        <div className="project-container">
        <section className="info-section">
            <h2>{projectInfo.title}</h2>
            <p>{projectInfo.description}</p>
        </section>
        <main className="main-section">
            <div className="to-do">
                <h3>A Fazer</h3>
                <hr />
                <div className="tasks"></div>
                <button className="btn-task" onClick={createTask}>+ Adicionar tarefa</button>
            </div>
            <div className="doing">
                <h3>Fazendo</h3>
                <hr />
                <button className="btn-task" onClick={createTask}>+ Adicionar tarefa</button>
            </div>
            <div className="done">
                <h3>Feito</h3>
                <hr />
                <button className="btn-task" onClick={createTask}>+ Adicionar tarefa</button>
            </div>
        </main>
        </div>
        </>
    )
}

export default ProjectPage;