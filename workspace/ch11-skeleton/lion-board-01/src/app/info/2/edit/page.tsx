export default async function EditPage() {
  return (
    <main className='flex-1 min-w-[320px] p-4'>
      <div className='text-center py-4'>
        <h2 className='text-2xl font-bold text-gray-700 dark:text-gray-200'>게시글 수정</h2>
      </div>
      <section className='mb-8 p-4'>
        <form action='/info/1'>
          <div className='my-4'>
            <label className='block text-lg content-center' htmlFor='title'>
              제목
            </label>
            <input id='title' type='text' placeholder='제목을 입력하세요.' className='w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200' name='title' value='Next.js란?' />

            <p className='ml-2 mt-1 text-sm text-red-500 dark:text-red-400'>제목은 필수 입니다.</p>
          </div>
          <div className='my-4'>
            <label className='block text-lg content-center' htmlFor='content'>
              내용
            </label>
            <textarea
              id='content'
              rows={15}
              placeholder='내용을 입력하세요.'
              className='w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              name='content'>
              Next.js는 React 기반의 풀스택 웹 프레임워크로, 서버 사이드 렌더링(SSR), 정적 생성(SSG), API 라우팅 등을 지원합니다. 페이지 기반 라우팅과 빠른 성능, SEO 최적화 기능이 내장돼 있어 개발과 배포가 매우 효율적입니다.
            </textarea>

            <p className='ml-2 mt-1 text-sm text-red-500 dark:text-red-400'>내용은 필수입니다.</p>
          </div>
          <hr />
          <div className='flex justify-end my-6'>
            <button type='submit' className='bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded'>
              수정
            </button>
            <a href='/info/1' className='bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded'>
              취소
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}
