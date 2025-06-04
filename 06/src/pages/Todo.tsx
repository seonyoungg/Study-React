import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import type { TodoItem } from './TodoItem';

function Todo() {
  // 샘플 목록
  const initItemList: TodoItem[] = [
    { num: 1, title: '자바스크립트 공부', done: true },
    { num: 2, title: 'JS 프로젝트', done: true },
    { num: 3, title: 'React 공부', done: false },
  ];

  const [itemList, setItemList] = React.useState(initItemList);

  // 할일 추가
  function addItem(title: string): void {
    console.log('할일 추가');
    // 데이터 갱신, itemList에 item 추가
    // num, title, done 속성을 가진 item 객체 생성
    const item = {
      num: itemList[itemList.length - 1]?.num + 1 || 1,
      title,
      done: false,
    };
    setItemList([...itemList, item]);
  }

  // 완료/미완료 처리
  function toggleDone(num: number): void {
    console.log(num, '완료/미완료');
    const newItemList = itemList.map((item) => (item.num === num ? { ...item, done: !item.done } : item));
    setItemList(newItemList);
  }

  // 할일 삭제
  function deleteItem(num: number): void {
    console.log(num, '할일 삭제');
    // 데이터 갱신, itemList에서 num에 해당하는 item 삭제
    const newItemList = itemList.filter((item) => item.num !== num);
    setItemList(newItemList);
  }

  return (
    <div id='main'>
      <div id='container'>
        <ul>
          <li>
            <h2>쇼핑 목록</h2>
            <TodoInput addItem={addItem} />
            <TodoList itemList={itemList} toggleDone={toggleDone} deleteItem={deleteItem} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;
