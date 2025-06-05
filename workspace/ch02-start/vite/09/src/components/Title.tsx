// 컴포넌트 만들어서 재사용을 하려면???
// 1. 독립된 파일로 작성(모듈)
// 2. 범용성(타이틀 값을 각 페이지 별로 다르게 전달 받아서 출력해야 함)
function Title({ titleName = 'Todo List' }) {
  //titleName이 없을 경우 기본적으로 Todo List 출력
  return (
    <div>
      <h1>09 Vite로 개발 환경 구축, 배포 - {titleName}</h1>
      <hr />
    </div>
  );
}

export default Title;
