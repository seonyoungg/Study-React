import axios from 'axios';

export default function useAxiosInstance() {
  const instance = axios.create({
    // create에는 객체형태로 전달됨
    baseURL: 'https://fesp-api.koyeb.app/todo',
    timeout: 1000 * 5,
    headers: {
      'Content-Type': 'application/json', // 요청 바디의 데이터 타입
      Accept: 'application/json', // 서버로부터 기대하는 응답 데이터 타입
    },
  });

  return instance;
}
