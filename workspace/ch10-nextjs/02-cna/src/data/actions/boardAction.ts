'use server';

import { PostInfoRes } from '@/types/board';

// 이 컴포넌트는 서버에서만 실행되어야 하며,
// 클라이언트 측에서도 원격 호출 방식(RPC)으로 사용할 수 있도록 설정된 함수

// 게시글 등록
export async function createPost(prevState: PostInfoRes, formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  // 많은 속성을 지닌 데이터를 일괄로 가져올 때
  // const jsonBody = Object.fromEntries(formData.entries());

  const res = await fetch(`https://fesp-api.koyeb.app/market/posts`, {
    method: 'POST',
    body: JSON.stringify({ title, content, type: 'qna' }),
    headers: {
      'Client-Id': 'openmarket',
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return data;
}
// cho9-ajax/p1-board-fetch/src/pages/board/commentNew 참고하기
// 한번에 데이터 꺼내오는거 있음
