import React from 'react';

type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

const NewComponent = (props: NewComponentPropsType) => {
    const studentsList = props.students.map(item => <li key={item.id}>name: {item.name}, age: {item.age}</li>)

    return (
        <ul>
            {studentsList}
        </ul>
    );
};

export default NewComponent;