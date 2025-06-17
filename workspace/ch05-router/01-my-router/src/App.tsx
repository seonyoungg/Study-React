import Home from '@pages/Home';
import Page1 from '@pages/Page1';
import Page2 from '@pages/Page2';
import { useState } from 'react';

function App() {
  // 현재 URL을 상태로 관리
  const [currentPath, setCurrentPath] = useState(location.pathname);

  // URL이 변경되면 컴포넌트를 교체한다.
  const handleLocationChange = () => {
    console.log(location.pathname, '주소변경됨');

    // APP이 리렌더링 되어야 한다
    setCurrentPath(location.pathname);
  };

  // popstate 이벤트가 발생하면 handleLocationChange 호출
  window.addEventListener('popstate', handleLocationChange);

  // url에 맞는 컴포넌트를 반환
  const renderComponent = () => {
    switch (currentPath) {
      case '/':
      case '/home':
        return <Home />;
      case '/page1':
        return <Page1 />;
      case '/page2':
        return <Page2 />;
      default:
        return <p>404 에러</p>;
    }
  };
  return <>{renderComponent()}</>;
}

export default App;
