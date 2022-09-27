interface CoursePart {
  name: string;
  exerciseCount: number;
}
type ContentProps = {
  parts: CoursePart[];
};

export const Total = ({ parts }: ContentProps) => {
  return (
    <>
      <p>
        Number of exercises{' '}
        {parts.reduce((carry, part) => carry + part.exerciseCount, 0)}
      </p>
    </>
  );
};
