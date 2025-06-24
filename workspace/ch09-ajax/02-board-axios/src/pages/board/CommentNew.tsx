import type React from 'react';
import { useState } from 'react';

function CommentNew() {
  // 댓글 내용 저장
  const [content, setContent] = useState('');

  // API 서버에 댓글 등록 요청
  const requestAddComment = async (formData: FormData) => {
    try {
      // console.log(formData.entries().next());

      // FormData 를 일반 Object로 반환
      const jsonBody = Object.fromEntries(formData.entries());
      // console.log(jsonBody);

      await fetch('https://fesp-api.koyeb.app/market/posts/1/replies?delay=1000', {
        headers: {
          'Client-Id': 'openmarket',
          'Content-Type': 'application/json', // 요청 바디의 데이터 타입을 서버에 json 이라고 알림
        },
        method: 'POST',
        body: JSON.stringify(jsonBody), //객체를 JSON 문자열로 반환
      });
    } catch (err) {
      // alert('네트워크 문제로 인해 게시물 상세 조회에 실패했습니다. 잠시 후 다시 요청하시기 바랍니다');
      console.error(err);
    }
  };
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // formData.append('content', content);
    // console.log('content', content);

    requestAddComment(formData);
  };
  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea name='content' value={content} onChange={(e) => setContent(e.target.value)} rows={3} cols={30} placeholder='댓글 내용' />
        <br />
        <button type='submit'>등록</button>
      </form>
    </>
  );
}

export default CommentNew;
