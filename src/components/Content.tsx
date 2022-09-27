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

type ContentProps = {
  courseParts: CoursePart[];
};

export const Content = ({ courseParts }: ContentProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  return (
    <div>
      {courseParts.map((part) => {
        switch (part.name) {
          case 'Fundamentals':
            return (
              <p key={part.name}>
                {part.name} {part.exerciseCount} {part.description}
              </p>
            );
          case 'Using props to pass data':
            return (
              <p key={part.name}>
                {part.name} {part.exerciseCount} {part.groupProjectCount}
              </p>
            );
          case 'Deeper type usage':
            return (
              <p key={part.name}>
                {part.name} {part.exerciseCount} {part.description}{' '}
                {part.exerciseSubmissionLink}
              </p>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
};
