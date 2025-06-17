import Mylink from '@pages/Mylink';

function Header() {
  return (
    <header>
      <h1>리액트 라우터 - 01 클라이언트 라우팅 직접 구현</h1>
      <Mylink to='/home'>home</Mylink>
      <br />
      <Mylink to='/page1'>page1</Mylink>
      <br />
      <Mylink to='/page2'>page2</Mylink>
    </header>
  );
}

export default Header;
