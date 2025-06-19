import useAxiosInstance from '@hooks/useAxiosInstance';
import type { TodoItem } from '@pages/TodoInfo';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

function TodoAdd() {
  const axiosInstance = useAxiosInstance();
  // const navigate = useNavigate();

  // TODO 과제 : 리셋 안되는 문제 해결하기
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm<TodoItem>();

  const addTodo = async (formData: TodoItem) => {
    console.log('API 서버 등록 요청', formData);

    // TODO API 서버에 등록요청
    await axiosInstance.post('/todolist', formData);
    alert('할일이 등록되었습니다.');
    reset();
    setFocus('title');

    // navigate(`/list`);
  };

  return (
    <>
      <div id='main'>
        <h2>할일 추가</h2>
        <div className='todo'>
          <form onSubmit={handleSubmit(addTodo)}>
            {/* 제목 */}
            <label htmlFor='title'>제목 :</label>
            <input
              type='text'
              id='title'
              placeholder='제목을 입력하세요'
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
              placeholder='내용을 입력하세요'
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

            <button type='submit'>추가</button>
            <Link to='/list'>취소</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default TodoAdd;
