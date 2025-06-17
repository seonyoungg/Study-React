import Footer from '@components/Footer';
import Header from '@components/Header';
import Layout from '@components/Layout';

function Home() {
  return (
    <>
      <Header />
      <Layout title='Home' text='Todo List App은 할일을 관리하는 리액트 앱입니다.' />
      <Footer />
    </>
  );
}

export default Home;
