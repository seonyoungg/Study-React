import useAxiosInstance from '@/hooks/useAxiosInstance';
import CommentNew from '@/pages/board/CommentNew';
import type { ReplyListResType } from '@/types/BoardType';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

function CommentList() {
  // axios instance
  const axios = useAxiosInstance();

  const { data, error } = useSuspenseQuery({
    queryKey: ['posts', 1, 'replies'],
    queryFn: () =>
      axios.get('posts/1/replies?delay=1000', {
        params: {
          // delay: Math.random() * 6000,
          delay: 1000,
        },
      }),
    // queryFn: async () => await axios.get('posts/1?delay=1000'),
    select: (response: { data: ReplyListResType }) => response.data.item,

    // TODO 작업이 실패하면 자동으로 재시도하기(catch 블럭에서 지정한 횟수만큼 requestCommentList() 호출 => 에러 시 무한반복 방지)
    // TODO 다른탭이나 앱에서 작업 후에 돌아오면 데이터 자동으로 갱신하기
    //      - document visibilitychange : 브라우저의 가시성 변경을 감지
    //      - window에 focus 이벤트로 브라우저 탭의 포커스  변경 감지
    //      - requestCommentList() 호출)
    retry: 3, // 작업이 실패하면 자동으로 재시도하기(default = 3)
    refetchOnWindowFocus: true, //(기본이 true)

    /**
    staleTime: 1000 * 20,
    refetchInterval: 1000 * 5,
    5초에 한번씩 20초간 캐싱된걸 로드
     */

    staleTime: 1000 * 5, // TODO 일정시간동안은 캐시해서 서버 호출 횟수 줄이기
    refetchInterval: 1000 * 3, // TODO 주기적으로 호출해서 데이터를 자동으로 갱신하기 setInterval()
  });

  const replyList = data?.map((reply) => <li key={reply._id}>{reply.content}</li>);

  let content = null;
  if (error) {
    content = <p>{error.message}</p>;
  } else if (data) {
    content = (
      <>
        <ul>{replyList}</ul>
        <CommentNew />
      </>
    );
  }

  return (
    <>
      <h3>댓글 목록</h3>

      {content}
    </>
  );
}

export default CommentList;
