import useAxiosInstance from '../hooks/useAxiosInstance';

export interface TodoItemType {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItemType;
  fetchList: () => void;
  toggleDone: (_id: number) => void;
}

function TodoItem({ item, fetchList, toggleDone }: TodoItemProps) {
  const axiosInstance = useAxiosInstance();

  const handleDelete = async (_id: number) => {
    console.log('삭제  요청', _id);
    try {
      await axiosInstance.delete(`/todolist/${_id}`);
      fetchList();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <li className='flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow hover:bg-gray-100 transition'>
      <span className='text-sm text-gray-400 w-16'>#{item._id}</span>
      <span className={`flex-1 text-center cursor-pointer text-gray-800 ${item.done ? 'line-through text-gray-400' : ''}`} onClick={() => toggleDone(item._id)}>
        {item.title}
      </span>
      <button type='button' className='p-1 rounded-xl text-sm text-blue-500 bg-white border border-color-blue hover:text-blue-700 font-medium px-2' onClick={() => handleDelete(item._id)}>
        🗑️ 삭제
      </button>
    </li>
  );
}

export default TodoItem;
