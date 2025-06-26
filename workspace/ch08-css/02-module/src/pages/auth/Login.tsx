import Button from '@/components/ui/Button';
import styles from './Login.module.css';
function Login() {
  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={`${styles.form} ${styles.login}`}>
        <div className={styles['input-group']}>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' className='input' autoComplete='email' required />
        </div>
        <div className={styles['input-group']}>
          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' className='input' autoComplete='current-password' required />
        </div>
        <Button bg='yellow' color='red'>
          회원가입
        </Button>
        <Button bg='blue' color='red'>
          로그인
        </Button>
        <Button bg='gray' color='blue'>
          아이디 찾기
        </Button>
      </form>
    </div>
  );
}

export default Login;
