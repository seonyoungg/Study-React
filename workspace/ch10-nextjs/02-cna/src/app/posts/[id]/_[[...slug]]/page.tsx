// 서버에서 내보내주는 데이터만 다르고 비슷한 로직, 결과를 내는 경우,
// 'Catch-all 세그먼트'를 고려할 것( [...slug] )

import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;

  const data = {
    title: `${id}번 게시물`,
    content: '게시판 이용 수칙입니다.',
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// 상세보기 + 좋아요 | 즐겨찾기 목록 + 좋아요 | 즐겨찾기 상세 목록
export default async function InfoPage({ params }: { params: { id: string; slug: string[] } }) {
  const pageParams = await params;
  console.log(`pageParams`, pageParams);

  switch (pageParams.slug?.[0]) {
    case 'likes':
    // 좋아요 목록 출력
    case 'favorites':
    // 즐겨찾기 목록 출력
  }
  return (
    <main className='max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl space-y-6'>
      <h1 className='text-2xl font-bold text-gray-800'>📄 {pageParams.id}번 게시물 상세 조회</h1>

      <Link href={`/posts/${pageParams.id}/likes`} className='inline-block text-blue-600 hover:underline'>
        좋아요 목록 보기
      </Link>

      {pageParams.slug?.[0] && (
        <section className='bg-gray-50 p-4 rounded-md border border-gray-200'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            {pageParams.id}번 게시물
            {pageParams.slug[0] === 'likes' ? '의 좋아요 목록' : pageParams.slug[0] === 'favorites' ? '의 ⭐ 즐겨찾기 목록' : ' - 잘못된 페이지입니다'}
          </h2>

          <ul className='space-y-2'>
            <li className='hover:bg-gray-100 rounded px-3 py-2'>
              <Link href={`/posts/${pageParams.id}/likes/1`} className='text-gray-800 hover:underline'>
                ❤️ 1번 좋아요 - 라이크핑
              </Link>
            </li>
            <li className='hover:bg-gray-100 rounded px-3 py-2'>
              <Link href={`/posts/${pageParams.id}/likes/2`} className='text-gray-800 hover:underline'>
                ❤️ 2번 좋아요 - 좋아핑
              </Link>
            </li>
          </ul>
        </section>
      )}

      {pageParams.slug?.[1] && (
        <section className='p-4 border-t border-gray-300'>
          <h3 className='text-lg font-medium text-gray-700 mb-2'>📌 {pageParams.slug[1]}번 좋아요 상세 정보</h3>
          <p className='text-gray-600 text-sm'>좋아핑, 2025.07.01 좋아요 누름</p>
        </section>
      )}
    </main>
  );
}
