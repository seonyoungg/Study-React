import type { TodoItem } from '@pages/TodoInfo';
import { Link, useNavigate, useOutletContext } from 'react-router';

interface OutletContextProps {
  item: TodoItem;
}

function TodoEdit() {
  const navigate = useNavigate();
  const { item } = useOutletContext<OutletContextProps>();

  const updateTodo = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO API서버에 수정요청

    alert('할일이 수정되었습니다');

    // 상세보기로 이동
    // navigate('/todoList/3');
    navigate(-1); // window.history.go(-1)
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className='todo'>
        <form onSubmit={updateTodo}>
          <label htmlFor='title'>제목 :</label>
          <input type='text' id='title' defaultValue={item.title} autoFocus />
          <br />
          <label htmlFor='content'>내용 :</label>
          <textarea id='content' cols={23} rows={5}>
            {item.content}
          </textarea>
          <br />
          <label htmlFor='done'>완료 :</label>
          <input type='checkbox' id='done' defaultChecked={item.done} />
          <br />
          <button type='submit'>수정</button>
          <Link to={`/todoList/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
