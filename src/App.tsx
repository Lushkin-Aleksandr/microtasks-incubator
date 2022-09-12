import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

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


    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(t => t.id === todolistId ? {...t, filter: value} : t));
    }



    const todolistsElements = todolists.map(t => {

        const getFilteredTasks = () => {
            let tasksForTodolist = tasks[t.id];
            if (t.filter === "active") {
                tasksForTodolist = tasks[t.id].filter(t => !t.isDone);
            }
            if (t.filter === "completed") {
                tasksForTodolist = tasks[t.id].filter(t => t.isDone);
            }
            return tasksForTodolist;
        }

        return (
            <Todolist
                key={t.id}
                todolistId={t.id}
                title={t.title}
                tasks={getFilteredTasks()}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={t.filter}/>
        )
    })

    return (
        <div className="App">
            {todolistsElements}
        </div>
    );
}

export default App;
