import { useEffect } from 'react';

function Home() {
  // Object.is 관련 공부
  useEffect(() => {
    console.log(Object.is({ hello: 'world' }, { hello: 'world' }));
  }, []);

  return (
    <>
      <div id='main'>
        <h2>Home</h2>
        <div className='todo'>
          <p>Todo List App은 할일을 관리하는 리액트 앱입니다.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
