import React from 'react';

const Total = ({ parts }) => {
    let exercisesNumber = parts.parts.reduce((total, value) => {
        return (total += value.exercises);
    }, 0);

    return <h4>total of {exercisesNumber} exercises</h4>;
};

export default Total;
