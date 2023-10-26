import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title,setTitle] = useState('')

    const handleSubmitAddtodo = (e) => {
        e.preventDefault();
        
        if (!title.trim()) {
            return setTitle("");
        }
        
        createTodo(title);
        setTitle("");
    }

    return(
        <form onSubmit={handleSubmitAddtodo} className="rounded-md bg-white overflow-hidden py-4 gap-4 items-center px-4 flex">
            <span 
            className="rounded-full border-2 w-5 h-5 inline-block ">
            </span>

            <input 
            type="text"
            placeholder="Create a new todo..." 
            className="w-full text-gray-400 outline-none"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />

        </form>
    );
}

export default TodoCreate;