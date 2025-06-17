import { Link } from 'react-router';

interface itemProps {
  dataNumber: number;
  title: string;
}
function TodoListItem({ dataNumber, title }: itemProps) {
  return (
    <>
      <li>
        <span>{dataNumber}</span>

        <Link to='/todoInfo'>{title}</Link>
        <Link to='/todoList'>삭제</Link>
      </li>
    </>
  );
}

export default TodoListItem;
