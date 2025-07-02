'use client';

import { fetchPosts } from '@/data/functions/boardFetch';
import { Post } from '@/types/board';
// import { Metadata } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: '게시물 목록 조회',
//   description: '게시물 목록 조회 페이지입니다.',
// };

export default function ListPage() {
  const [data, setData] = useState<Post[] | null>(null);

  async function fetchAsyncPosts() {
    const resData = await fetchPosts();
    setData(resData);
  }

  useEffect(() => {
    fetchAsyncPosts();
  }, []);

  console.log(`API서버로부터 받은 게시물 목록 수`, data?.length);

  const posts = data?.map((post) => (
    <li key={post._id} className='border-b border-gray-200 hover:bg-gray-100 transition px-4 py-3'>
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
