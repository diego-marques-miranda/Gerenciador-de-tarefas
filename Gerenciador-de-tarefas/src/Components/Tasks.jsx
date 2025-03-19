import Task from "./Task.jsx";
function Tasks(props)
 {
     
     return (
         <div className="shadow-md bg-teal-300 w-100 p-5 rounded-md">

             {props.tasks.length === 0 && (
                 <h1 className="text-xl text-teal-950 text-center">Adicione uma tarefa!</h1>
             )}
             
             {props.tasks.length > 0 && ( 
                 <ol className="flex flex-col gap-1.5">
                 {
                     props.tasks.map((task) =>
                         (
                             <Task  isCompleted={task.isCompleted}
                                    key={task.id}
                                    TaskOnClick={() => props.TaskOnClick(task.id)}
                                    title={task.title}
                                    UpArrow={() => props.MoveTaskUp(task.id)}
                                    DownArrow={() => props.MoveTaskDown(task.id)}
                                    Exclude={() => props.ExcludeTask(task.id)}
                            />
                             
                         )
                     )
                 }
                 </ol>
             )}
             
         </div>
         
     )
 }
 
 export default Tasks