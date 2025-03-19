import {useState} from "react";
import Input from "./Input.jsx";

function CreateTask(props)
{
    const [task, setTask] = useState("");

    function HandleEnterClick(e)
    {
        if (e.key === "Enter")
        {
            props.AddTask(task);
            setTask("");
        }
    }
    
    return (
        <div className="shadow-md p-5 m-5 w-100 bg-teal-300 rounded-md">
            <Input value={task} 
                   type="text" 
                   placeholder="Digite uma tarefa..."
                   onChange={(e) => setTask(e.target.value)}
                   onKeyDown={(e) => HandleEnterClick(e)}
            />
            <button onClick={() => {
                props.AddTask(task)
                setTask("");
            }
            } className="shadow-md flex w-full justify-center bg-teal-700 mt-2 p-2 rounded-md hover:bg-teal-900 transition-colors duration-300">Adicionar tarefa</button>
        </div>

    )
}

export default CreateTask