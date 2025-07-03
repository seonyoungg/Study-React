'use server';

import { PostInfoRes } from '@/types/board';
// import { revalidatePath } from 'next/cache';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// 이 컴포넌트는 서버에서만 실행되어야 하며,
// 클라이언트 측에서도 원격 호출 방식(RPC)으로 사용할 수 있도록 설정된 함수

// 게시글 등록 함수
// prevState: 이전 상태(예: useFormState 사용 시 전달), formData: 사용자가 입력한 폼 데이터
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  // ※ 참고: 모든 formData 값을 한꺼번에 가져올 수 있음 (여러 필드가 많을 경우 유용)
  // cho9-ajax/p1-board-fetch/src/pages/board/commentNew 참고하기
  // const jsonBody = Object.fromEntries(formData.entries());

  // 게시글 등록 API 요청
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, content, type: 'qna' }), // 전송할 JSON 데이터 (Q&A 타입으로 고정)
    headers: {
      'Client-Id': 'openmarket', // API 인증용 클라이언트 ID
      'Content-Type': 'application/json', // 요청 본문이 JSON 형식임을 명시
    },
  });
  const data = await res.json();

  // 성공적으로 등록되었을 경우
  if (data.ok) {
    // '/posts' 페이지에 대한 캐시를 무효화 (최신 게시글 목록 반영을 위해)
    // revalidatePath('/posts'); // => revalidate 필요 없음

    // 'list'라는 태그를 가진 데이터의 캐시를 무효화
    // 해당 태그를 사용하는 페이지(예: 게시글 목록)가 최신 데이터를 반영하도록 함
    revalidateTag('list');

    // '/posts' 페이지로 이동
    redirect('/posts');
  }
  return data;
}
