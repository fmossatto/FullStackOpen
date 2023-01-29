import React from 'react';
import StatisticsLine from './StatisticsLine';

const Statistics = (props) => {
    if (props.feedbacks === 0) {
        return <div>{props.feedbacks === 0 && <p>No feedback given</p>}</div>;
    }

    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticsLine text="good" value={props.good} />
                    <StatisticsLine text="neutral" value={props.neutral} />
                    <StatisticsLine text="bad" value={props.bad} />
                    <StatisticsLine text="all" value={props.feedbacks} />
                    <StatisticsLine text="average" value={props.score / props.feedbacks} />
                    <StatisticsLine
                        text="positive"
                        value={`${(props.good / props.feedbacks) * 100} %`}
                    />
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;
