import type { TodoItem } from '@pages/TodoItem';

type TodoAction = { type: 'ADD'; value: TodoItem } | { type: 'TOGGLE' | 'DELETE'; value: { _id: number } };

// interface 로도 가능함 => 이후 Typeguard 필요
// interface TodoAction {
//   type: 'ADD' | 'TOGGLE' | 'DELETE';
//   value: TodoItem | { _id: number };
// }

function todoReducer(state: TodoItem[], action: TodoAction) {
  let newState = state;

  // TODO 1.상태관리 로직 작성
  return newState;
}

export default todoReducer;
