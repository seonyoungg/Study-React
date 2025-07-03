'use server';

import { Post } from '@/types/board';

// 게시글 조회 함수
export async function fetchPosts(): Promise<Post[]> {
  // API 서버에 GET 요청을 보냄
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts?type=qna`, {
    // API 요청에 필요한 클라이언트 식별자 지정
    headers: {
      'Client-Id': 'openmarket',
    },
    next: {
      tags: ['list', 'qna'], // 태그 중복 처리 또한 가능
      // 이 fetch 요청의 응답을 'list' 태그로 캐시 지정(revalidateTag('list')로 무효화 가능)
      revalidate: 10, // 10초 후에 자동으로 revalidate
    },
    // cache : 'no-cache'
    cache: 'force-cache',
    /*
    - Next.js 15 이후 기본값 cache : 'no-cache' 
      매번 서버에 요청해서 최신 데이터를 받는 방식
      'reload'는 항상 네트워크에서 데이터를 가져오며, 캐시는 무시함
    - Next.js 14의 기본값 cache : 'force-cache' 
      캐시된 응답이 있으면 그것을 사용하고,없으면 요청 후 캐시에 저장 (정적 데이터에 적합)
     */
  });

  const data = await res.json();

  console.log('BoardFetch', data.item.length);
  return data.item;
}
