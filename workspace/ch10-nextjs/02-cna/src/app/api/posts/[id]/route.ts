import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log('GET 라우트 핸들러', id);

  // DB 연동해서 상세 정보 조회 작업을 직접 구현(풀스택)
  // 준비된 API 서버 호출
  const res = await fetch(`https://fesp-api.koyeb.app/market/posts/${id}`, {
    headers: {
      'Client-id': 'openmarket',
    },
  });

  const data = await res.json();
  // const data = {
  //   id,
  //   title: '가짜 제목',
  // };
  return Response.json(data);
}

export function POST() {
  return Response.json('route handler의 POST 응답');
}

export function DELETE() {
  return Response.json('route handler의 DELETE 응답');
}
