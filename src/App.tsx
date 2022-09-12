import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type FilterType = {
    [id: string]: FilterValuesType
}

export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksType = {
    [id: string]: TaskType[]
}



function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");


    let todolistID1: string = v1();
    let todolistID2: string = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const [filter, setFilter] = useState<FilterType>({
        [todolistID1]: 'all',
        [todolistID2]: 'all',
    })


    function removeTask(todolistId: string, taskId: string) {
        let filteredTasks = tasks[todolistId].filter(t => t.id !== taskId);
        setTasks({...tasks, [todolistId]: filteredTasks});
    }

    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks[todoListId]];
        setTasks({...tasks, [todoListId]: newTasks});
    }

    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        const newTasks = tasks[todoListId].map(t => {
            if (t.id !== taskId) return t;
            return {...t, isDone};
        })

        setTasks({...tasks, [todoListId]: newTasks});
    }


    const getFilteredTasks = (todolistId: string) => {
        let tasksForTodolist = tasks[todolistId];
        if (filter[todolistId] === "active") {
            tasksForTodolist = tasks[todolistId].filter(t => !t.isDone);
        }
        if (filter[todolistId] === "completed") {
            tasksForTodolist = tasks[todolistId].filter(t => t.isDone);
        }
        return tasksForTodolist;
    }


    function changeFilter(todolistId: string, value: FilterValuesType) {
        setFilter({...filter, [todolistId]: value});
    }



    const todolistsElements = todolists.map(t => {
        return (
            <Todolist
                key={t.id}
                todolistId={t.id}
                title={t.title}
                tasks={getFilteredTasks(t.id)}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter[t.id]}/>
        )
    })

    return (
        <div className="App">
            {todolistsElements}
        </div>
    );
}

export default App;
