'use client';

import { createPost } from '@/data/actions/boardAction';
import { useActionState } from 'react'; // 서버에서 정의한 액션 함수

export default function RegistForm() {
  // useActionState 사용
  const [state, formAction, isPending] = useActionState(createPost, null);

  console.log(`isPending`, isPending, state);

  /**
   * state: 서버가 응답으로 보내준 값 (예: 성공 메시지나 에러)
   * formAction: <form action={formAction}> 에 넣을 액션 트리거 함수
   * isPending: 서버 요청이 진행 중일 때 true, 끝나면 false (로딩 처리에 사용)
   */

  return (
    <form className='bg-white p-6 rounded-lg shadow space-y-4' action={formAction}>
      <div>
        <label htmlFor='title' className='block mb-1 font-medium text-gray-700'>
          제목
        </label>
        <input type='text' id='title' name='title' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='제목을 입력하세요' />
      </div>
      <div>
        <label htmlFor='content' className='block mb-1 font-medium text-gray-700'>
          내용
        </label>
        <textarea id='content' name='content' rows={5} className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='내용을 입력하세요' />
      </div>
      <div className='text-right'>
        <button type='submit' className='bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition'>
          등록
        </button>
      </div>
    </form>
  );
}
