function Task(props)
{

    const check = "🗸";
    const upArrow = "↑";
    const downArrow = "↓";
    const exclude = "✕";
    
    let isCompleted = props.isCompleted;
    
    return (
        <li className="flex shadow-md bg-teal-700 p-2 rounded-md hover:bg-teal-900 transition-colors duration-300" key={props.key}>
            <span className={`${isCompleted ? "pl-1" : ""} pt-0.5`}>{isCompleted ? check : ""}</span>
            <span onClick={props.TaskOnClick} className={`text-lg ${isCompleted ? "line-through" : ""} cursor-pointer ${isCompleted ? "pl-2" : ""}`}>
                {props.title}
            </span>

            <div className="flex gap-0.5 ml-auto">
                <button onClick={props.UpArrow} className="shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2.5 rounded-md">{upArrow}</button>
                <button onClick={props.DownArrow} className=" shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2.5 rounded-md">{downArrow}</button>
                <button onClick={props.Exclude} className="shadow hover:bg-teal-950 transition-colors duration-300 mx-0.5 bg-teal-800 px-2 rounded-md">{exclude}</button>
            </div>
        </li>
        
    );
}

export default Task;