import { useState } from 'react';
interface FormErrors {
  name?: { message: string };
  email?: { message: string };
  cellphone?: { message: string };
}

const errorStyle = {
  fontSize: '12px',
  color: 'red',
  fontWeight: 'bold',
};

// 이메일 검증 정규식
const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 휴대폰 검증 정규식
const cellphoneExp = /^(01[01]{1})[0-9]{3,4}[0-9]{4}$/;

function App() {
  // const [ name, setName ] = useState('');
  // const [ email, setEmail ] = useState('');
  // const [ cellphone, setCellphone ] = useState('010');
  // const user = { name, email, cellphone };

  const [user, setUser] = useState({
    name: '',
    email: '',
    cellphone: '010',
  });

  // const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };
  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };
  // const handleCellphoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCellphone(event.target.value);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  // 검증 에러가 발생하거나 에러가 사라질 때 리렌더링이 필요하므로 상태로 관리
  const [errors, setErrors] = useState<FormErrors>({});

  const onSubmitHandler = (event: React.FormEvent) => {
    //브라우저 기본 동작 취소(submit 동작 취소)
    event.preventDefault();

    const newErrors: FormErrors = {};

    // 필수 입력 체크
    if (user.name.trim() === '') {
      newErrors.name = { message: '이름을 입력하세요.' };
    } else if (user.name.trim().length < 2) {
      newErrors.name = { message: '2글자 이상 입력하세요.' };
    }

    if (user.email.trim() === '') {
      newErrors.email = { message: '이메일을 입력하세요.' };
    } else if (emailExp.test(user.email) === false) {
      newErrors.email = { message: '이메일 양식에 맞지 않습니다.' };
    }

    if (user.cellphone.trim() === '') {
      newErrors.cellphone = { message: '휴대폰 번호를 입력하세요.' };
    } else if (cellphoneExp.test(user.cellphone) === false) {
      newErrors.cellphone = { message: '휴대폰 형식에 맞지 않습니다.' };
    }

    if (newErrors) {
      // 입력값 검증 실패
      setErrors(newErrors);
      // console.error(errors);
    } else {
      // 입력값 검증 통과
      setErrors({});
      console.log('서버에 전송...', user);
    }
  };
  return (
    <>
      <h1>15 회원가입 입력값 상태 관리</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='name'>이름</label>
        <input type='text' id='name' name='name' value={user.name} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.name?.message}</div>

        <label htmlFor='email'>이메일</label>
        <input type='email' id='email' name='email' value={user.email} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.email?.message}</div>

        <label htmlFor='cellphone'>휴대폰</label>
        <input type='tel' id='cellphone' name='cellphone' value={user.cellphone} onChange={handleChange} />
        <br />
        <div style={errorStyle}>{errors.cellphone?.message}</div>

        <button type='submit'>가입</button>
      </form>

      <p>
        이름: {user.name}
        <br />
        이메일: {user.email}
        <br />
        휴대폰: {user.cellphone}
        <br />
      </p>
    </>
  );
}

export default App;
