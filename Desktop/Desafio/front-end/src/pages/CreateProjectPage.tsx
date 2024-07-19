import axios from "axios"

export default function CreateProjectPage(){

    const createProject = () =>{
        axios.post('project',{
            data:{

            }
        })
    }


    return (
        <>
            <form>
                <label htmlFor="projectName">Nome do projecto:</label>
                <input type="text" id="projectName" required />
                <label htmlFor="projectDescription">Descrição do projecto:</label>
                <input type="text" id="projectDescription" required />
                <button onClick={createProject}>Criar projeto</button>
            </form>
        </>
    )
}