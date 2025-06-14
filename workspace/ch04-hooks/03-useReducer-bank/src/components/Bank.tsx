import bankReducer from '../bankReducer';
import { useReducer, useState } from 'react';

/** Reducer : Component 의 State를 업데이트 해줌
 *  Dispatch(Action) ===> Reducer(State, Action) ===> Update ===> State
 *
 * - 거래내역(State)를 업데이트 하기 위해서
 * 1. 철수가 은행(Reducer)에게 요구를 함 => Dispatch
 * 2. 요구의 내용(만원을 출금해주세요!) => Action
 * 3. 은행에서는 거래내역을 업데이트 해줌(Reducer => State Update)
 *
 * reducer - state를 업데이트 하는 역할(은행)
 * dispatch - state 업데이트를 위한 요구
 * action - 요구의 내용
 *
 * */

/* 알아두기
const ACTION_TYPES ={
  deposit : '예금',
  withdraw : '출금'
}

type ReducerAction = {
  type: keyof typeof ACTION_TYPES;
  value: number;
};
*/

const Bank = () => {
  const [number, setNumber] = useState(0);

  const [money, dispatch] = useReducer(bankReducer, 0);
  //  const [배열, 함수] = useReducer(reducer, 초기값)

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step='5000' />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', value: number });
        }}>
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdraw', value: number });
        }}>
        출금
      </button>
    </div>
  );
};

export default Bank;
