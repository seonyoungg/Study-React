import Button from '@/components/ui/Button';

function App() {
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button type='button'>버튼</Button>
      <Button variant='cancel' type='button'>
        취소버튼
      </Button>
      <Button variant='confirm' type='submit'>
        submit 버튼
      </Button>
    </>
  );
}

export default App;
