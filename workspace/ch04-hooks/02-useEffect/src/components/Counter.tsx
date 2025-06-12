import Button from '@components/Button';
import { useEffect, useState } from 'react';

interface CounterProps {
  children: string;
}
// Counter 컴포넌트
function Counter({ children = '1' }: CounterProps) {
  console.log('\tCounter 호출됨');

  const initCount = Number(children);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(initCount);

  // TODO 1. 1초 후에 handleUp()을 호출해서 자동으로 값 한번 증가

  // useEffect(이팩트 함수, []) :: mount, unmount시 한번만 실행
  // Deps 자리를  [ ] 이렇게 비워두면 변하는 값이 없으므로 최초에 상위 컴포넌트가 실행될 때 한번만 실행됨

  // useEffect(이팩트함수) :: 컴포넌트가 업데이트 될 때마다 실행

  // 마운트 된 이후에 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependencies에 빈배열 지정 시 마운트 된 후에 한번만 호출');
  // }, []);

  // useEffect(() => {
  //   console.log('마운트 됬찌롱');
  //   return () => {
  //     console.log('언마운트 됬찌롱');
  //   };
  // }, []);

  useEffect(() => {
    // setup
    console.log('setup 함수  호출');
    const timer = setInterval(() => {
      console.log(new Date());
    }, 1000);

    // setup 함수의 return => cleanup
    // 1. 컴포넌트가 언마운트될 때 호출
    // 2. setup  함수가 재실행 되기 전에 호출
    return () => {
      console.log('cleanup 함수 호출');
      clearInterval(timer);
    };
  });

  console.log('렌더링 중', document.querySelector('span')?.textContent);

  useEffect(() => {
    console.log('렌더링 후', document.querySelector('span')?.textContent);
  });

  // 카운터 감소
  const handleDown = () => {
    setCount(count - step);
  };

  // 카운터 증가
  const handleUp = () => {
    setCount(count + step);
  };

  // 카운터 초기화
  const handleReset = () => {
    setCount(0);
  };

  // TODO 2. 증감치가 수정되면 증감치만큼 1회 자동 증가  useEffect(() => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleUp();
  //   }, 1000);
  //   console.log('dependecies에 값을 지정하면 컴포넌트가 업데이트 될 때 지정한 값 중 하나라도 수정되었을 경우 호출됨 ');
  // }, [step]);

  return (
    <div id='counter'>
      <label htmlFor='step'>증감치</label>
      <input
        id='step'
        type='number'
        value={step}
        onChange={(e) => {
          setStep(Number(e?.target.value));
        }}
      />
      <Button color='red' onClick={handleDown}>
        -_-
      </Button>
      <Button type='reset' onClick={handleReset}>
        0_0
      </Button>
      <Button type='submit' color='blue' onClick={handleUp}>
        +_+
      </Button>
      <span>{count}</span>
    </div>
  );
}
export default Counter;
