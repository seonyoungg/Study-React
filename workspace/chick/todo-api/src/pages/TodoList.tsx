import type { TodoItemType } from './TodoItem';
import TodoItem from './TodoItem';
interface TodoListPropType {
  itemList: TodoItemType[];
  fetchList: () => void;
  toggleDone: (_id: number) => void;
}

function TodoList({ itemList, fetchList, toggleDone }: TodoListPropType) {
  const liList = itemList.map((item) => {
    return <TodoItem key={item._id} item={item} fetchList={fetchList} toggleDone={toggleDone} />;
  });

  return <ul className='todolist max-w-2xl mx-auto mt-4 space-y-4 p-4 bg-white rounded-2xl shadow'>{liList}</ul>;
}

export default TodoList;
