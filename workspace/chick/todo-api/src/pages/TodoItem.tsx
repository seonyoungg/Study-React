import useAxiosInstance from '../hooks/useAxiosInstance';

export interface TodoItem {
  _id: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItem;
  fetchList: () => void;
}

function TodoItem({ item, fetchList }: TodoItemProps) {
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
    <li>
      <span>{item._id}</span>
      <span>{item.done ? <s>{item.title}</s> : item.title}</span>
      <button type='button' onClick={() => handleDelete(item._id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
