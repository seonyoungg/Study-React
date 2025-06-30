import useAxiosInstance from '@/hooks/useAxiosInstance';
import CommentList from '@/pages/board/CommentList';
import type { BoardInfoResType } from '@/types/BoardType';
// import type { BoardInfoResType, BoardInfoType } from '@/types/BoardType';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
// import { useEffect, useState } from 'react';

function BoardInfo() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, error } = useSuspenseQuery({
    queryKey: ['posts', 1],
    queryFn: () => axios.get('posts/1?delay=1000'),
    // queryFn: async () => await axios.get('posts/1?delay=1000'),
    select: (response: { data: BoardInfoResType }) => response.data.item,
  });
  return (
    <>
      <h1>04 React Query(Tanstack Query) + Suspense </h1>

      {error && <p>{error.message}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <Suspense fallback={<p>댓글 로딩중...</p>}>
            <CommentList />
          </Suspense>
        </>
      )}
    </>
  );
}

export default BoardInfo;
