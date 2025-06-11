import { Component } from 'react';
interface ClickMeProps {
  level?: number;
}

interface ClickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>03 클래스 컴포넌트 - 컴포넌트의 라이프 사이클</h1>
        <ClickMe level={5} />
      </div>
    );
  }
}

class ClickMe extends Component<ClickMeProps, ClickMeState> {
  state = { count: 0 };

  // 1-1
  constructor(props: ClickMeProps) {
    super(props);
    this.state = { count: props.level || 1 };

    console.log('1-1 constructor 호출됨');
  }

  // 1-2 / 2-1
  static getDerivedStateFromProps(props: ClickMeProps, state: ClickMeState) {
    console.log('1-2/2-1 getDerivedStateFromProps 호출됨');
    console.log('\tprops', props);
    console.log('\tstate', state);

    if (state.count / (props.level || 1) > 10) {
      return {
        count: (props.level || 1) * 10,
      }; //새로운 값으로 state업데이트
    }
    return null; // state를 업데이트 하지 않음
  }

  increase = () => {
    this.setState({ count: this.state.count + (this.props.level ?? 1) });
  };

  // 1-3/2-3
  render() {
    console.log('1-3/2-3 render');
    console.log(document.querySelector('button')?.textContent);

    return (
      <div>
        클릭 횟수 X {this.props.level}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }

  // 1-4
  // 함수형컴포넌트에서는 useEffect() 훅 사용
  componentDidMount() {
    // API 서버로부터 데이터 패칭과 같은 side effect가 발생하는 작업은 이곳에서 처리
    console.log('1-4 componentDidMount 호출됨');
    console.log(document.querySelector('button')?.textContent);
  }

  // 2-2 shouldComponentUpdate(nextProps, nextState)
  shouldComponentUpdate(nextProps: ClickMeProps, nextState: ClickMeState) {
    console.log('2-2 shouldComponentUpdate 호출됨');
    console.log('\t현재값', this.props, this.state);
    console.log('\t다음값', nextProps, nextState);
    if (this.state.count === nextState.count) {
      return false; // render 호출 X
    } else {
      return true; // render 호출 O
    }
  }

  // 2-4
  getSnapshotBeforeUpdate(prevProps: ClickMeProps, prevState: ClickMeState) {
    console.log('2-4 getSnapshotBeforeUpdate 호출됨');
    return this;
  }

  // 2-5
  componentDidUpdate(prevProps: ClickMeProps, prevState: ClickMeState, snapshot: string) {
    console.log('2-5 componentDidUpdate 호출됨.');
    console.log('\t이전값', prevProps, prevState);
    console.log('\t현재값', this.props, this.state);
    console.log('\tsnapshot', snapshot);
  }

  // 3- 1
  componentWillUnmount(): void {
    console.log('3-1 componentWillUnmount');
  }
}

export default Parent;
