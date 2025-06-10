import { Component } from 'react';
interface ClickMeProps {
  level?: number;
}

interface clickMeState {
  count: number;
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe level={10} />
        <ClickMe level={5} />
        <ClickMe />
      </div>
    );
  }
}
class ClickMe extends Component<ClickMeProps, clickMeState> {
  // state/setState 는 부모에 정의되어 있는 이름
  // 상태는 state 변수 하나만 사용 가능해서 여러개의 상태를 관리하려면 객체로 지정
  state = { count: 0 };

  constructor(props: ClickMeProps) {
    // 부모 클래스의 생성자를 통해 this를 생성하고 초기화 하므로
    // super()를 호출해야 자식 클래스에서 this 사용 가능
    // super(props) 호출해야 자식 클래스에서 this.props사용 가능
    super(props);
    this.state = { count: props.level || 1 };
  }

  increase = () => {
    this.setState({ count: this.state.count + this.props.level || 0 });
  };

  render() {
    return (
      <div>
        클릭 횟수 X {this.props.level}: {this.state.count}
        <button onClick={this.increase}>클릭</button>
      </div>
    );
  }
}

export default Parent;
