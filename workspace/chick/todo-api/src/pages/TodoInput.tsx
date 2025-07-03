import { useRef, useState } from 'react';
import useAxiosInstance from '../hooks/useAxiosInstance';

interface TodoInputPropType {
  fetchList: () => void;
}

function TodoInput({ fetchList }: TodoInputPropType) {
  console.log('### TodoInput 호출됨.');

  // 제어 컴포넌트 1. state 정의
  const [title, setTitle] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const axiosInstance = useAxiosInstance();

  // 추가 버튼 클릭 시 이벤트 처리
  const handleAdd = async () => {
    console.log(`${title} 추가`);

    await axiosInstance.post(`/todolist`, {
      title,
      content: title,
    });

    setTitle('');
    inputRef.current?.focus();
    fetchList();
  };

  // 엔터 이벤트 처리
  const handleAddKeydown = (event: React.KeyboardEvent) => {
    if (event.nativeEvent.isComposing) return; // 글자가 미완성일 경우 무시한다.
    if (event.key === 'Enter') handleAdd();
  };

  return (
    <div className='todoinput flex items-center gap-2'>
      {/* 입력창 */}
      <input ref={inputRef} type='text' value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleAddKeydown} autoFocus placeholder='할 일을 입력하세요' className='flex-1 px-4 py-1.5 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500' />

      {/* 추가 버튼 */}
      <button type='button' onClick={handleAdd} className='px-4 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition'>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
