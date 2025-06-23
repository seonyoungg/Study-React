import CommentList from '@/pages/board/CommentList';
import type { BoardInfoType } from '@/types/BoardType';
import { useEffect, useState } from 'react';

function BoardInfo() {
  const [data, setData] = useState<BoardInfoType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // API 서버에 1번 게시물의 상세 정보를 fetch() 요청으로 보낸다
  const requestInfo = async () => {
    try {
      // 로딩상태 true 지정
      setIsLoading(true);

      const response = await fetch('https://fesp-api.koyeb.app/market/posts/1?delay=1000', {
        headers: {
          'Client-Id': 'openmarket',
        },
      });
      console.log('response', response);

      const jsonData = await response.json();
      console.log('jsonData', jsonData);

      if (jsonData.ok) {
        // 응답이 성공할 경우 => 게시물 상세 정보 출력
        setData(jsonData.item);
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
    requestInfo();
  }, []);

  return (
    <>
      <h1>01 Fetch API</h1>

      {isLoading && <p>로딩중 ...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <CommentList replies={data.replies} />
        </>
      )}
    </>
  );
}

export default BoardInfo;
