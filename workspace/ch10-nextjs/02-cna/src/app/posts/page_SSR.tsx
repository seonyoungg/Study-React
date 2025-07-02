import { fetchPosts } from '@/data/functions/boardFetch';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '게시물 목록 조회',
  description: '게시물 목록 조회 페이지입니다.',
};
export default async function ListPage() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 * 2);
  });

  // const dummyLists = [];
  // for (let i = 0; i <= 1000; i++) {
  //   dummyLists.push({
  //     id: i,
  //     title: i + '번 게시물',
  //   });
  // }

  const data = await fetchPosts();

  console.log(`API서버로부터 받은 게시물 목록 수`, data.length);

  const posts = data.map((post) => (
    <li key={post._id} className='border-b border-gray-200 hover:bg-gray-100 transition px-4 py-3'>
      {/* prefetch 사용자가 보이는 화면에서 링크 모두 로드되도록 함 */}
      {/* <Link href={`/posts/${post.id}`} prefetch={true}>
        {post.title}
      </Link> */}
      <Link href={`/posts/${post._id}`} className='text-blue-600 hover:underline'>
        {post._id}. {post.title}
      </Link>
    </li>
  ));
  return (
    <div className='max-w-2xl mx-auto mt-4'>
      <h1 className='text-2xl font-bold mb-4'>게시판 목록</h1>
      <ul className='bg-white rounded-lg shadow'>{posts}</ul>
    </div>
  );
}
