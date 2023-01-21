import React from 'react';

const Total = (props) => {
    let exercisesNumber = 0;
    props.parts.parts.forEach((ex) => (exercisesNumber += ex.exercises));

    return <p>Number of exercises {exercisesNumber}</p>;
};

export default Total;
