import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NewComponent from "./components/NewComponent";
import CarsTable from "./components/CarsTable";
import Button from "./components/Button";
import FilterTask from "./components/FilterTask";

function App() {

    // Map
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

    // Button
    const buttonFoo = (name: string) => {
        console.log(`I'm ${name}`)
    }

    // Hook useState
    let [a, setA] = useState(1);
    const increment = () => {
        setA(++a);
    }
    const setZero = () => {
        setA(0);
    }

    // Filter
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [currentMoney, setCurrentMoney] = useState(money);

    const filterMoney = (name: string) => {
        const filteredMoney = money.filter(item => {
            if (name === 'all') return true;

            return item.banknots === name;

        });
        setCurrentMoney(filteredMoney);

    }



    return (
        <div className="App">
            <div className='container'>

                <h2>1. Nested components</h2>
                <Header title='New Header'/>
                <Body titleForBody='New Body'/>
                <Footer titleForFooter={'New Footer'}/>


                <h2>2. Map</h2>
                -- List of students --
                <NewComponent students={students}/>
                -- Table of cars --
                <CarsTable topCars={topCars}/>

                <h2>3. Button</h2>
                <Button buttonText='My youtube channel 1' callback={() => buttonFoo('Vasya')}/>
                <Button buttonText='My youtube channel 2' callback={() => buttonFoo('Ivan')}/>
                <Button buttonText='Stupid button' callback={() => buttonFoo('a Stupid Button')}/>

                <h2>4. Hook useState</h2>
                <h3>{a}</h3>
                <Button buttonText={'plus 1'} callback={increment}/>
                <Button buttonText={'set 0'} callback={setZero}/>

                <h2>5. Filter</h2>
                <FilterTask currentMoney={currentMoney} callback={filterMoney} />




            </div>

        </div>
    );
}

export default App;
