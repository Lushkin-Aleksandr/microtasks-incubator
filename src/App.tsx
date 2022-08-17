import React, {useState} from 'react';
import './App.css';
import FilterTask from "./components/microTasks/FilterTask";
import NestedComponentsTask from "./components/microTasks/NestedComponentsTask";
import MapTask from "./components/microTasks/MapTask";
import ButtonTask from "./components/microTasks/ButtonTask";
import UseStateTask from "./components/microTasks/UseStateTask";

function App() {

    // Filter
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
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
                <NestedComponentsTask/>

                <h2>2. Map</h2>
                <MapTask/>

                <h2>3. Button</h2>
                <ButtonTask/>

                <h2>4. Hook useState</h2>
                <UseStateTask/>

                <h2>5. Filter</h2>
                <FilterTask currentMoney={currentMoney} callback={filterMoney}/>

            </div>

        </div>
    );
}

export default App;
