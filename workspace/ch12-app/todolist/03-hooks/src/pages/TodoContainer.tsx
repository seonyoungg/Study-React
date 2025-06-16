import Todo from '@pages/Todo';
import type { TodoItem } from '@pages/TodoItem';
import todoReducer from '@pages/todoReducer';
import { useReducer, useRef } from 'react';

function TodoContainer() {
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { _id: 1, title: '자바스크립트 공부', done: true },
    { _id: 2, title: 'JS 프로젝트', done: true },
    { _id: 3, title: 'React 공부', done: false },
  ];

  // 상태가 수정되면 자동으로 화면이 리렌더링 된다.
  const [itemList, todoDispatch] = useReducer(todoReducer, initItemList);

  // TODO 2. useRef를 사용해서 nextId를 생성해서 할일 추가 시 1씩 증가
  // 이 때 itemList[itemList.length - 1]?._id + 1 || 1 관련 수정 생각해보기
  const newId = useRef(initItemList.length + 1);

  // 할일 추가
  const addItem = (title: string) => {
    const item: TodoItem = { _id: newId.current++, title, done: false }; //현재, 마지막꺼 삭제하고 새로 추가 시 id 부여관련 에러가 있음
    todoDispatch({ type: 'ADD', value: item });
  };

  // 완료/미완료 처리
  const toggleDone = (_id: number) => {
    todoDispatch({ type: 'TOGGLE', value: { _id } });
  };

  // 할일 삭제
  const deleteItem = (_id: number) => {
    todoDispatch({ type: 'DELETE', value: { _id } });
  };

  return <Todo itemList={itemList} addItem={addItem} toggleDone={toggleDone} deleteItem={deleteItem} />;
}

export default TodoContainer;
