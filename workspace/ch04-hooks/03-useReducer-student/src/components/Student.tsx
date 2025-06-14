export interface StudentProps {
  id: number;
  name: string;
  isHere: boolean;
}

function Student({ name, isHere }: StudentProps) {
  return (
    <div>
      <span>
        {isHere ? (
          <span>{name}</span>
        ) : (
          <span>
            <s>{name}</s>
          </span>
        )}
      </span>
    </div>
  );
}

export default Student;
