import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { Link } from 'react-router';

function TodoInfo() {
  return (
    <>
      <Header />
      <Layout title='할일 상세 보기'>
        <div className='todo'>
          <div>제목 : 잠자기</div>
          <div>내용 : 주말에 수업 끝나면 잠이나 실컷 자야지</div>
          <div>상태 : 미완료</div>
          <div>작성일 : 2025.06.16 12:23:45</div>
          <div>수정일 : 2025.06.16 13:45:12</div>
          <Link to='/todoEdit'>수정</Link>
          <Link to='/todoList'>목록</Link>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default TodoInfo;
