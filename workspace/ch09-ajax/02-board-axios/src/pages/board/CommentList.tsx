import useAxiosInstance from '@/hooks/useAxiosInstance';
import CommentNew from '@/pages/board/CommentNew';
import type { BoardInfoResType, BoardInfoType, ReplyListResType } from '@/types/BoardType';
import { useEffect, useState } from 'react';

// interface PropType {
//   replies: ReplyType[];
// }

// function CommentList({ replies = [] }: PropType) {
function CommentList() {
  // 서버의 데이터를 저장할 상태
  const [data, setData] = useState<BoardInfoType | null>(null);

  // 로딩 상태
  const [isLoading, setIsLoading] = useState(false);

  // 에러 상태
  const [error, setError] = useState<Error | null>(null);

  //axios instance
  const axios = useAxiosInstance();

  // API 서버에 1번 게시물의 댓글 목록을 fetch() 요청으로 보낸다
  const requestCommentList = async () => {
    try {
      // 로딩상태 true 지정
      setIsLoading(true);

      const response = await axios.get<ReplyListResType>('/posts/1/replies', {
        params: {
          delay: 1000,
          page: 3,
          limit: 10,
        },
      });
      setData(response.data.item);
    } catch (err) {
      setError(err as Error);
      setData(null);
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
