import Button from '@/components/ui/Button';

function App() {
  return (
    <>
      <h1>03 Styled Components</h1>

      <Button type='button' bg='gray' size='sm' data-name='default'>
        버튼
      </Button>
      <Button type='button' bg='yellow' size='md'>
        취소버튼
      </Button>
      <Button type='submit' bg='red' size='lg'>
        submit 버튼
      </Button>
    </>
  );
}

export default App;
