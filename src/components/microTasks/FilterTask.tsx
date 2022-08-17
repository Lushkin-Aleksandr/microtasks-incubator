import React from 'react';
import Button from "../Button";

type MoneyItemType = {
    banknots: string, value: number, number: string,
}

type FilterTaskPropsType = {
    currentMoney: Array<MoneyItemType>
    callback: (name: string) => void
}

const FilterTask = (props:FilterTaskPropsType) => {


    const moneyList = props.currentMoney.map(item => {
        return (
            <li key={item.number}>
                <span>{item.banknots} </span>
                <span>{item.value} </span>
                <span>{item.number} </span>
            </li>
        )
    })


    return (
        <div>
            <ul>
                {moneyList}
            </ul>
            <Button buttonText='All' callback={() => props.callback('all')} />
            <Button buttonText='Dollars' callback={() => props.callback('Dollars')} />
            <Button buttonText='Rubles' callback={() => props.callback('RUBLS')} />
        </div>
    );
};

export default FilterTask;