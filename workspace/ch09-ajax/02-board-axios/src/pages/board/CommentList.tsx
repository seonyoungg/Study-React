import CommentNew from '@/pages/board/CommentNew';
import type { ReplyType } from '@/types/BoardType';
import { useEffect, useState } from 'react';

// interface PropType {
//   replies: ReplyType[];
// }

// function CommentList({ replies = [] }: PropType) {
function CommentList() {
  // 서버의 데이터 저장할 상태
  const [data, setData] = useState<ReplyType[] | null>(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다
  const requestCommentList = async () => {
    try {
      // 로딩상태 true 지정
      setIsLoading(true);

      const response = await fetch('https://fesp-api.koyeb.app/market/posts/1/replies?page=1&limit=5&delay=1000', {
        headers: {
          'Client-Id': 'openmarket',
        },
      });
      console.log('response', response);

      const jsonData = await response.json();
      console.log('jsonData', jsonData);

      if (jsonData.ok) {
        // 응답이 성공할 경우 => 댓글 목록 ㅊ ㅜㄹ력
        setData(jsonData.item);
        setError(null);
      } else {
        // 응답이 실패할 경우
        throw new Error(jsonData.message);
      }
    } catch (err) {
      setError(err as Error);
      // alert('네트워크 문제로 인해 게시물 상세 조회에 실패했습니다. 잠시 후 다시 요청하시기 바랍니다');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCommentList();
  }, []);

  // const replyList = replies.map((reply) => <li key={reply._id}>{reply.content}</li>);
  const replyList = data?.map((reply) => <li key={reply._id}>{reply.content}</li>);
  return (
    <>
      <h3>댓글 목록</h3>

      {isLoading && <p>댓글 로딩중 ...</p>}
      {error && <p>{error.message}</p>}

      {data && (
        <>
          <ul>{replyList}</ul>
          <CommentNew />
        </>
      )}
    </>
  );
}

export default CommentList;
