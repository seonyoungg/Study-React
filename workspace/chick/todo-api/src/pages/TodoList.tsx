import { ClipLoader } from 'react-spinners';
import type { TodoItem } from './TodoItem';
import TodoItem from './TodoItem';

interface TodoListPropType {
  itemList: TodoItem[];
}

function TodoList({ itemList }: TodoListPropType) {
  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} fetchList={fetchList} />;
  });

  return <>{loading ? <ClipLoader color='#2894ff' loading={loading} size={150} aria-label='Loading Spinner' data-testid='loader' /> : <ul className='todolist'>{liList}</ul>}</>;
}

export default TodoList;
