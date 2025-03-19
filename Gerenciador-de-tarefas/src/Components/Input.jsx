function Input(props)
{
    
    return (
        <input value={props.value} 
               onChange={props.onChange} 
               type={props.type}
               className=" shadow-md hover:bg-teal-100 hover:text-gray-700 transition-colors duration-300 focus:ring-3 focus:text-black focus:ring-green-200 outline-none w-full h-10 bg-teal-50 p-3 rounded-md text-gray-500"
               placeholder={props.placeholder}
               onKeyDown={props.onKeyDown}
        />
    );
}

export default Input;