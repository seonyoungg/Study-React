import type { TodoItem } from '@pages/TodoInfo';
import TodoListItem from '@pages/TodoListItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

interface TodoList {
  items: TodoItem[];
}

const dummyData: TodoList = {
  items: [
    {
      _id: 1,
      title: '잠자기',
      done: true,
      createdAt: '2025.06.16 16:49:00',
      updatedAt: '2025.06.16 16:49:00',
    },
    {
      _id: 2,
      title: '자바스크립트 복습',
      done: false,
      createdAt: '2025.06.17 16:49:00',
      updatedAt: '2025.06.17 16:49:00',
    },
  ],
};

function TodoList() {
  const [data, setData] = useState<TodoList | null>(null);

  // 할일 목록을 API 서버에서 조회
  const fetchTodoList = () => {
    //TODO API 서버에 목록 요청
    console.log('API 서버에 목록 요청');

    // 더미 데이터로 지정
    setData(dummyData);
  };

  // 삭제 처리
  const handleDelete = () => {
    //TODO API 서버에 삭제 요청
    console.log('API 서버에 삭제 요청');

    //TODO API 서버에 목록 요청
    console.log('API 서버에 목록 요청');

    alert('삭제되었습니다.');
    // 더미 데이터로 지정
    setData(dummyData);
  };

  useEffect(() => {
    fetchTodoList();
  }, []); // 빈 배열을 전달해서 마운트시에만 실행;

  const itemList = dummyData.items.map((item) => <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />);
  return (
    <>
      <div>
        <h2>할일 목록</h2>
        <div className='todo'>
          <Link to='/todoAdd'>추가</Link>
          <br />
          <form className='search'>
            <input type='text' autoFocus placeholder='검색어를 입력하세요' />
            <button type='submit'>검색</button>
          </form>
          <ul className='todolist'>{itemList}</ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
