import { Metadata } from 'next';

//동적인 메타 데이터
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = await params;

  const data = {
    title: `${id}번 게시물`,
    content: '게시판 이용 수칙입니다.',
  };

  return {
    title: data.title,
    description: data.content,
  };
}

// nextjs15부터는 params가 비동기 방식으로 넘어오기때문에 params를 사용할때는 async await을 붙여줘야한다.
export default async function InfoPage({ params }: { params: { id: string } }) {
  // const pageParams = await params;
  const slugParams = await params;

  console.log('slugParams', slugParams);
  return <h1>상세 조회 - {slugParams.id}번 게시물</h1>;
}

// _자체가 이 파일을 [[...slug]] 보여주기 위해 비활성화 한거임
