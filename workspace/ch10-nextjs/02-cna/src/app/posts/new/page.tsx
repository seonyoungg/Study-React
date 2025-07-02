import RegistForm from '@/app/posts/new/RegistForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.',
};

export default function NewPage() {
  return (
    <div className='max-w-xl mx-auto mt-10 px-4'>
      <h1 className='text-2xl font-bold mb-6'>게시글 등록</h1>
      <RegistForm />
    </div>
  );
}
