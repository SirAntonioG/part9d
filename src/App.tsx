import { Content } from './components/Content';
import { Header } from './components/Header';
import { Total } from './components/Total';

// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartOne extends CoursePartBase {
  name: 'Fundamentals';
  description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: 'Using props to pass data';
  groupProjectCount: number;
}

interface CoursePartThree extends CoursePartBase {
  name: 'Deeper type usage';
  description: string;
  exerciseSubmissionLink: string;
}

type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

// coursePart variable
const courseParts: CoursePart[] = [
  {
    name: 'Fundamentals',
    exerciseCount: 10,
    description: 'This is an awesome course part',
  },
  {
    name: 'Using props to pass data',
    exerciseCount: 7,
    groupProjectCount: 3,
  },
  {
    name: 'Deeper type usage',
    exerciseCount: 14,
    description: 'Confusing description',
    exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
  },
];

const App = () => {
  const courseName = 'Half Stack application development';

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total parts={courseParts} />
    </div>
  );
};

export default App;
