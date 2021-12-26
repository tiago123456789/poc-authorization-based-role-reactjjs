import React, { useState } from "react";
import Header from "../components/Header";
import { useAuth } from "../provider/AuthContext";

const Todo = () => {
    const { hasPermission } = useAuth();
    const [todos, setTodos] = useState([
        { title: "Teste", done: false },
        { title: "Teste 2", done: false },
        { title: "Teste 3", done: false },
    ])

    const makeDone = (index) => {
        const registers = todos;
        registers[index].done = true;
        setTodos([...registers])
    }

    const deleteItem = (index) => {
        let registers = todos.filter((item, indexItem) => index != indexItem);
        setTodos([...registers])
    }

    return (
        <>
            <Header />
            <ul>
                {
                    todos.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title} | Complete: {(item.done ? "true" : "false")} &nbsp;
                                { hasPermission(["ADMIN", "EMPLOYEE"]) && <button onClick={() => makeDone(index)}>Done</button>} &nbsp;
                                { hasPermission("ADMIN") && <button onClick={() => deleteItem(index)}>Delete</button>}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Todo;