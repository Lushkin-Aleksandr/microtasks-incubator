import React from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NewComponent from "./components/NewComponent";
import CarsTable from "./components/CarsTable";

function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ];
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ];

    return (
        <div className="App">
            <div className='container'>

                <h2>Nested components</h2>
                <Header title='New Header'/>
                <Body titleForBody='New Body'/>
                <Footer titleForFooter={'New Footer'}/>


                <h2>Map</h2>
                -- List of students --
                <NewComponent students={students}/>
                -- Table of cars --
                <CarsTable topCars={topCars}/>

            </div>

        </div>
    );
}

export default App;
