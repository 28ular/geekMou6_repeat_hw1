import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInput, createTodo, toggleTodo, deleteTodo } from '../redux/todoSlice.js';


export const TodoLists = () => {
    const { todo, input } = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const handleAdd = () => {

        if (input.trim() === '') return ;

        dispatch(createTodo())
    }


    return (
        <div>
            <input
                value={input}
                onChange={e => dispatch(setInput(e.target.value))}
                placeholder="Redux/toolkit"
            />
            <button onClick={handleAdd}>Добавить</button>

            <ul>
                {todo.map(item => (
                    <li key={item.id}>
            <span onClick={() => dispatch(toggleTodo(item.id))}>
              {item.name} {item.completed ? "(Готово)" : ""}
            </span>
                        <button onClick={() => dispatch(deleteTodo(item.id))}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
