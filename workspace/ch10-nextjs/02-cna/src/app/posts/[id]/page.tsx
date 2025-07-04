import { Metadata } from 'next';
import { Suspense } from 'react';

//동적인 메타 데이터
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
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

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 4.html
export function generateStaticParams() {
  // 공지글에 대한 fetch 작업
  const posts = [
    { id: '1', title: '1번 제목' },
    { id: '2', slug: '2', sid: '3', title: '2번 제목' },
    { id: '3', slug: '2', sid: '3', title: '4번 제목' },
  ];

  return posts;
}

// ✨별도의 Content 컴포넌트🐛
async function Content({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${pageParams.id}?delay=5000`);
  const data = await res.json();

  return (
    <p className='text-lg text-gray-700 break-keep'>
      <span className='font-semibold'>내용:</span> {data.item?.content}
    </p>
  );
}

// nextjs15부터는 params가 비동기 방식으로 넘어오기때문에 params를 사용할때는 async await을 붙여줘야한다.
export default async function InfoPage({ params }: { params: Promise<{ id: string }> }) {
  const pageParams = await params;

  const res = await fetch(`http://localhost:3000/api/posts/${pageParams.id}`);
  const data = await res.json();
  // const slugParams = await params;

  console.log('pageParams', pageParams);

  return (
    <>
      <div className='max-w-2xl mx-auto mt-4 p-6 bg-white rounded-xl shadow-md'>
        <h1 className='text-2xl font-bold text-gray-900  mb-4'>
          상세 조회 - <span className='text-blue-600 dark:text-blue-400'>{pageParams.id}</span>번 게시물
        </h1>
        <div className='space-y-2'>
          <p className='text-lg text-gray-700 '>
            <span className='font-semibold'>제목:</span> {data.item?.title}
          </p>
          <Suspense fallback={<p>제발 로딩중...</p>}>
            <Content params={params} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
