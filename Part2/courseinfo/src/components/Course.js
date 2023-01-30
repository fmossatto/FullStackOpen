import Content from './Content';
import Header from './Header';
import Total from './Total';

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course} />
            <Total parts={course} />
        </div>
    );
};

export default Course;
