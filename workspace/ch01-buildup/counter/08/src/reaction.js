 let _root; 
let _stateValue;

const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);
    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith('on')) {
          // on으로 시작하는 속성을 추가 하기 위한 코드
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }
    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === 'string' || typeof child === 'number') {
        child = document.createTextNode(child);
      }else if(typeof child === "function"){
        child = child();
      }
      elem.appendChild(child);
    }
    // 요소 노드 반환
    return elem;
  },

  // 루트 노드를 관리하는 객체를 생성해서 반환
  // Reaction.createRoot(document.getElementById('root'));
  createRoot: (rootNode) => {
    let _appComponent;
    return _root = {
      //루트 노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링
      render(appFn) {
        _appComponent = _appComponent || appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      },
    };  
  },

  // 상태 값(데이터) 관리
  useState: (initialValue) => {
    // 최초 호출 되었을 경우에만 초기 값을 지정하고 이후에 다시 호출되는 경우에는 값을 유지한다.
    // ?? : null병합 연산자 
    // 왼쪽 피연산자가 null이나 undefined일 때 오른쪽 값을 사용
    _stateValue = _stateValue ?? initialValue; // 앞에 값이 트루면 앞에 값이 거짓이면 통과

    // stateValue 값을 수정하는 함수
    function setValue(newValue){
      const oldValue = _stateValue // 이전 상태 값
      _stateValue = newValue; // 현재 상태 값 

      // Object.is(a,b) : 두 값이 같냐를 뭍는 것
      // 상태가 변경된 경우라면 리렌더링을 한다. 
      // 원시형 타입일 때 값만 다르면 false가 되므로 render()호출됨
      // 객체일때 같은 메모리 주소를 가지고 있으면 true가 되므로 render() 호출 안됨

      if(!Object.is(oldValue,newValue)){ 
        _root.render();
      } 
    }

    // const [count, setCount] = reaction.useState(0);
    return [_stateValue, setValue];
  }
};

export default reaction;