import Footer from '@components/Footer';
import Header from '@components/Header';

function ErrorPage() {
  return (
    <>
      <Header />
      <div id='main'>
        <div className='todo'>
          <h2>에러 발생</h2>
          <p>잠시후 다시 이용해 주세요.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
