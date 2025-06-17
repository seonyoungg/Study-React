import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import { Link } from 'react-router';

function TodoAdd() {
  return (
    <>
      <Header />
      <Layout title='할일 추가'>
        <div className='todo'>
          <form>
            <label htmlFor='title'>제목 :</label>
            <input type='text' id='title' autoFocus />
            <br />
            <label htmlFor='content'>내용 :</label>
            <textarea id='content'></textarea>
            <br />
            <Link to='/todoAdd'>추가</Link>
            <Link to='/todoList'>취소</Link>
          </form>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default TodoAdd;
