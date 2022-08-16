import React from 'react';

type CarsTablePropsType = {
    topCars: Array<CarType>
}

type CarType = {
    manufacturer: string,
    model: string
}

const CarsTable = (props: CarsTablePropsType) => {
    const carsList = props.topCars.map((car, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
        )
    })


    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {carsList}
            </tbody>
        </table>
    );
};

export default CarsTable;