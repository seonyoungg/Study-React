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

  const dummyLists = [];
  for (let i = 0; i <= 1000; i++) {
    dummyLists.push({
      id: i,
      title: i + '번 게시물',
    });
  }

  const posts = dummyLists.map((post) => (
    <li key={post.id}>
      {/* prefetch 사용자가 보이는 화면에서 링크 모두 로드되도록 함 */}
      {/* <Link href={`/posts/${post.id}`} prefetch={true}>
        {post.title}
      </Link> */}
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <>
      <h1>목록 조회</h1>
      <ul>{posts}</ul>
    </>
  );
}
