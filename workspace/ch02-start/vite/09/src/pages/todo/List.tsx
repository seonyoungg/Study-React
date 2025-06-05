import type { TodoItem } from '../../App';

interface TodoListProps {
  list: TodoItem[];
}

// Todo 목록을 전달받아서 출력해야 함
function TodoList({ list }: TodoListProps) {
  const itemList = list.map((item) => {
    return (
      <li key={item._id} data-done={item.done}>
        {item.title} - {item.done ? '완료' : '진행중'}
      </li>
    );
  });
  return <ul className='todolist'>{itemList}</ul>;
}

export default TodoList;
