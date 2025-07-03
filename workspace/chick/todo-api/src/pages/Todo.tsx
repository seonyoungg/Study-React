import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import useAxiosInstance from '../hooks/useAxiosInstance';
import type { TodoItemType } from './TodoItem';

function Todo() {
  const [itemList, setItemList] = useState<TodoItemType[]>([]);

  const toggleDone = (_id: number) => {
    const newItemList = itemList.map((item) => (_id === item._id ? { ...item, done: !item.done } : item));
    setItemList(newItemList);
  };

  const fetchList = async () => {
    try {
      const res = await axiosInstance.get('/todolist'); // fulfilled 상태
      // console.log('목록 조회 요청에 대한 서버의 응답', res);
      console.log('목록 조회 요청에 대한 서버의 응답', res.data.items);

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
    <div id='main' className='max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800 border-b pb-2 text-center'>할일 목록</h2>
      <TodoInput fetchList={fetchList} />
      <TodoList itemList={itemList} fetchList={fetchList} toggleDone={toggleDone} />
    </div>
  );
}

export default Todo;
