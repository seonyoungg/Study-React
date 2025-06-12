export interface StudentProps {
  id: number;
  name: string;
  isHere: boolean;
}

function Student({ name, isHere }: StudentProps) {
  return (
    <div>
      <span>
        {name} - {isHere ? '출석' : '결석'}
      </span>
      <button>삭제</button>
    </div>
  );
}

export default Student;
