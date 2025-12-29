import {useTodo} from "./useTodo.js";
import '../components/style/zustandtodo.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoList = () => {
    const {todo , input , createTodo , setInput, } = useTodo()

    const HandleClick = () => {
        if (input.trim() ===  '') {
            const notify = toast.error('заполните поле!')
            return
        }
        createTodo(input);
        const notify_s = toast.success('успешно!')

    }

    return (
        <>
            <ToastContainer/>
        <div className="Todo" style={{ marginLeft: '850px'}}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='zustand'
            />
            <button onClick={HandleClick}>createTodo</button>
            <ul className="list">
                {todo.map((t) => (
                    <div key={t?.id} className='li_z'>
                        <span>{t.name}</span>
                        <span>{t.completed ? '✅' : '❌'}</span>
                    </div>
                ))}
            </ul>
        </div>


        </>
    )
}