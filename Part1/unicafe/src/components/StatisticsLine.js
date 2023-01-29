import React from 'react';

const StatisticsLine = ({ text, value }) => {
    return (
        <tr>
            <td>
                <p>{text}</p>
            </td>
            <td>{value}</td>
        </tr>
    );
};

export default StatisticsLine;
