// TODO 1. 메세지를 입력하면 입력 메세지에 반영되도록 수정

import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setMessage(event.target.value);
  //   };

  return (
    <>
      <h1>01 useState - 상태 관리</h1>
      <div>
        {/* <input type='text' value={message} onChange={handleChange} /> */}
        <input
          type='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <span>입력 메세지: {text}</span>
      </div>
    </>
  );
}

export default App;
