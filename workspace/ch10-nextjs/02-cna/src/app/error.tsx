'use client';

// import NotFound from '@/app/not-found';
import Link from 'next/link';

export default function RootError({ error }: { error: Error }) {
  console.error(`error.tsx에서 처리`, error);
  return (
    <div className='p-6'>
      <p>에러가 발생했습니다.</p>
      <Link href='/' className='text-blue-500 underline'>
        홈으로
      </Link>
    </div>

    // <NotFound />
  );
}
