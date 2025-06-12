import { useReducer, useState } from 'react';
import Student, { type StudentProps } from './Student';

interface StateProps {
  count: number;
  student: StudentProps[];
}

interface StudentAction {
  type: 'add';
  payload: {
    name: string;
  };
}

const initState: StateProps = {
  count: 0,
  student: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    },
  ],
};

const reducer = (state: StateProps, action: StudentAction) => {
  switch (action.type) {
    case 'add': {
      const newStudent: StudentProps = {
        id: Date.now(),
        name: action.payload.name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        student: [...state.student, newStudent],
      };
    }
    default:
      return state;
  }
};

function Attendance() {
  const [name, setName] = useState('');

  const [studentInfo, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentInfo.count}</p>
      <input
        type='text'
        placeholder='이름을 입력하세요'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (name.trim() !== '') {
            dispatch({ type: 'add', payload: { name } });
            setName('');
          }
        }}>
        추가
      </button>
      {studentInfo.student.map((student) => {
        return <Student key={student.id} id={student.id} name={student.name} isHere={student.isHere} />;
      })}
    </div>
  );
}

export default Attendance;
