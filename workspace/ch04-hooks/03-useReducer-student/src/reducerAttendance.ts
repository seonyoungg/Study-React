import type { StateProps } from '@components/Attendance';
import type { StudentProps } from '@components/Student';

interface StudentAction {
  type: 'add';
  data: {
    name: string;
  };
}

function reducerAttendance(state: StateProps, action: StudentAction) {
  switch (action.type) {
    case 'add': {
      const newStudent: StudentProps = {
        id: Date.now(),
        name: action.data.name,
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
}

export default reducerAttendance;
