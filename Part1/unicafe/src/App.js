import { useState } from 'react';
import Button from './components/Button';
import Statistics from './components/Statistics';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [feedbacks, setFeedbacks] = useState(0);
    const [score, setScore] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
        setFeedbacks(feedbacks + 1);
        setScore(score + 1);
    };

    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setFeedbacks(feedbacks + 1);
    };

    const handleBad = () => {
        setBad(bad + 1);
        setFeedbacks(feedbacks + 1);
        setScore(score - 1);
    };

    return (
        <div>
            <h2>give feedback</h2>
            <Button text="Good" clickFunction={handleGood} />
            <Button text="Neutral" clickFunction={handleNeutral} />
            <Button text="Bad" clickFunction={handleBad} />
            <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
                feedbacks={feedbacks}
                score={score}
            />
        </div>
    );
}

export default App;
