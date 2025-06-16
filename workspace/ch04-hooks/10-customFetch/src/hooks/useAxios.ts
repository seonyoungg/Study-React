import axios from 'axios';
import { useEffect, useState } from 'react';

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = 'https://fesp-api.koyeb.app/todo';

// fetch 함수 호출시 필요한 파라미터 타입 정의
interface FetchParams {
  url: string;
}

// Todo 아이템의 타입 정의
interface Todo {
  _id: number; // Todo 아이템의 고유 식별자
  title: string; // Todo 제목
  done: boolean; // 완료 여부
}

// Todo 목록 조회 성공시 응답 데이터 타입 정의
interface TodoListRes {
  ok: 1; // 성공 여부 (1: 성공)
  items: Todo[]; // Todo 아이템 배열
  pagination: {
    // 페이지네이션 정보
    page: number; // 현재 페이지
    limit: number; // 페이지당 아이템 수
    total: number; // 전체 아이템 수
    totalPages: number; // 전체 페이지 수
  };
}

// 에러 응답 데이터 타입 정의
interface ErrorRes {
  ok: 0; // 성공 여부 (0: 실패)
  error: Error; // 에러 객체
}

// 응답 데이터 타입 정의
type ResData = TodoListRes | ErrorRes;

function useAxios(fetchParams: FetchParams) {
  // Todo 목록을 저장할 상태 (초기값: null)
  const [data, setData] = useState<TodoListRes | null>(null);

  // 에러 메시지를 저장할 상태 (초기값: null)
  const [error, setError] = useState<Error | null>(null);

  // 로딩 상태를 저장할 상태 (초기값: false)
  const [isLoading, setIsLoading] = useState(false);

  // Todo API 서버에 데이터를 요청하는 비동기 함수
  const requestFetch = async (params: FetchParams) => {
    console.log('fetchTodo 함수 호출됨', params);
    try {
      // 로딩 상태를 true로 설정
      setIsLoading(true);

      /** axios 라이브러리를 사용하여 서버에 GET 요청
       * - axios는 HTTP 상태 코드가 200~299가 아니면
       *    자동으로 catch 블록으로 에러를 던져줌
       *
       * -  fetch는 네트워크 오류만 catch에서 잡고,
       *    404/500 같은 HTTP 에러는 if (!res.ok)로 직접 처리해야 함
       *
       * => 따라서 axios를 사용하면 코드가 더 간결해지고,
       *    if (!res.ok) 같은 조건문 없이 에러핸들링 가능
       */
      const res = await axios.get(API_SERVER + params.url);
      console.log('서버 응답:', res);

      // axios는 자동으로 JSON 파싱해 주므로 res.data 사용
      const data: ResData = res.data as ResData;
      console.log('파싱된 데이터:', data);
      // type ResData = TodoListRes | ErrorRes;(위에서 타입 유니온타입으로 정의)
      setData(data as TodoListRes);
    } catch (err) {
      // 네트워크 오류 등 예외 발생시 처리
      console.error('에러 발생:', err);
      setError(err as Error);
      setData(null);
    } finally {
      // 성공/실패 여부와 관계없이 로딩 상태를 false로 설정
      setIsLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 Todo 목록을 가져오기
  useEffect(() => {
    // 1초 지연을 주어 API 호출 (로딩 상태 테스트를 위해)
    requestFetch(fetchParams);
  }, []); // 빈 배열을 전달하여 마운트시 한번만 실행되도록 설정

  return { isLoading, error, data };
}

export default useAxios;

// fetch 는 네트워크 에러만 catch 에서만 잡음
// HTTP 에러는 정상 응답으로 간주하여 if(!res.ok)
