import useAxiosInstance from '@/hooks/useAxiosInstance';
import CommentList from '@/pages/board/CommentList';
import type { BoardInfoType } from '@/types/BoardType';
import { useEffect, useState } from 'react';

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  //axios instance
  const axios = useAxiosInstance();

  // API 서버에 1번 게시물의 상세 정보를 fetch() 요청으로 보낸다
  const requestInfo = async () => {
    try {
      // 로딩상태 true 지정
      setIsLoading(true);

      const response = await axios.get<BoardInfoType>('/posts/1?delay=1000');

      // 게시물 상세 정보 출력
      setData(response.data.item);
      setError(null);
    } catch (err) {
      setError(err as Error);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestInfo();
  }, []);

  return (
    <>
      <h1>02 Axios 라이브러리</h1>

      {isLoading && <p>로딩중 ...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList />
          {/* <CommentList replies={data.replies} /> */}
        </>
      )}
    </>
  );
}

export default BoardInfo;
