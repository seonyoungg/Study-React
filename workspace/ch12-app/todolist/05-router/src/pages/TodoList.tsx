import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';
import TodoListItem from '@pages/TodoListItem';
import { Link } from 'react-router';

function TodoList() {
  return (
    <>
      <Header />
      <Layout title='할일 목록'>
        <div className='todo'>
          <Link to='/todoAdd'>추가</Link>
          <br />
          <form className='search'>
            <input type='text' autoFocus />
            <button type='submit'>검색</button>
          </form>
          <ul className='todolist'>
            <TodoListItem dataNumber={1} title='잠자기' />
            <TodoListItem dataNumber={2} title='자바스크립트 복습' />
            <TodoListItem dataNumber={3} title='리액트 과제 하기' />
          </ul>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default TodoList;
