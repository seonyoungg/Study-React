import { atom } from 'jotai';

//  Read-write Atom
export const countAtom = atom(8); // 상태 하나를 정의

// Write-only Atom
export const countDownAtom = atom(
  null, // Read - null 일 경우  읽기 불가능을 의미

  // get: atom의 값을 읽을 떄 쓰는 애
  // set: atom의 값을 세팅할 떄 쓰는 애

  (get, set, step: number) => {
    const count = get(countAtom);
    set(countAtom, count - step);
  } // Write 함수
);

// Read-only Atom
// const countAtom = atom(8);
// export const getCountAtom = atom(
//   (get) => {
//     get(countAtom);
//   } // read함수
//   // () => { } // write 함수를 지정하지 않으면 읽기 전용
// );

// ----아래와 같이도 사용가능
// export const countAtom = atom(
//   (get) => {
//     get(_countAtom);
//   }, // read함수
//   (get, set, value: number) => {
//     if (value >= 0) {
//       set(_countAtom, value);
//     }
//   } // write 함수를 지정하지 않으면 읽기 전용
// );
