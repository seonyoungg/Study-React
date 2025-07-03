import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import useAxiosInstance from '../hooks/useAxiosInstance';
import type { TodoItemType } from './TodoItem';

function Todo() {
  const [itemList, setItemList] = useState<TodoItemType[]>([]);

  const fetchList = async () => {
    try {
      const res = await axiosInstance.get('/todolist'); // fulfilled 상태
      console.log('목록 조회 요청에 대한 서버의 응답', res);

      setItemList(res.data.items);
    } catch (err) {
      console.error(err); // rejected 상태
    }
  };

  // api 연결
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div id='main'>
      <h2>할일 목록</h2>
      <TodoInput fetchList={fetchList} />
      <TodoList itemList={itemList} fetchList={fetchList} />
    </div>
  );
}

export default Todo;
