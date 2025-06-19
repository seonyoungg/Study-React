import useAxiosInstance from '@hooks/useAxiosInstance';
import type { TodoItem } from '@pages/TodoInfo';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router';

interface OutletContextProps {
  item: TodoItem;
  setData: (data: TodoItem) => void;
}

function TodoEdit() {
  const axiosInstance = useAxiosInstance();
  const { _id } = useParams();
  const navigate = useNavigate();
  const { item, setData } = useOutletContext<OutletContextProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoItem>({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  const updateTodo = async (formData: TodoItem) => {
    console.log('API 서버에 수정 요청', formData);
    // TODO API서버에 수정요청

    try {
      const res = await axiosInstance.patch<{ item: TodoItem }>(`/todolist/${_id}`, formData);
      setData(res.data?.item);

      alert('할일이 수정되었습니다');
    } catch (err) {
      console.error(err);
      alert('할일 수정 실패하였습니다.');
    }

    // 상세보기로 이동
    // navigate('/list/3');
    // navigate(-1); // window.history.go(-1)
    navigate(`/list/${_id}`);
  };

  return (
    <>
      <h2>할일 수정</h2>
      <div className='todo'>
        <form onSubmit={handleSubmit(updateTodo)}>
          {/* 제목 */}
          <label htmlFor='title'>제목 :</label>
          <input
            type='text'
            id='title'
            {...register('title', {
              required: '제목을 입력하세요',
              pattern: {
                value: /\S/,
                message: '제목에 공백만 입력할 수 없습니다.',
              },
            })}
          />
          <br />
          <div className='input-error'>{errors.title?.message}</div>

          {/* 내용 */}
          <label htmlFor='content'>내용 :</label>
          <textarea
            id='content'
            cols={23}
            rows={5}
            {...register('content', {
              required: '내용을 입력하세요',
              pattern: {
                value: /\S/,
                message: '내용에 공백만 입력할 수 없습니다.',
              },
            })}></textarea>
          <br />
          <div className='input-error'>{errors.content?.message}</div>

          {/* 완료체크 */}
          <label htmlFor='done'>완료 :</label>
          <input type='checkbox' id='done' {...register('done')} />
          <br />
          <button type='submit'>수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
